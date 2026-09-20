const test = require('node:test');
const assert = require('node:assert/strict');

const { DeliveryLocationService, createDelivery } = require('../src/delivery-location-service');
const { What3WordsLocationResolver } = require('../src/what3words-location-resolver');

const makeResolver = () => ({
  async resolve(address) {
    if (address === 'filled.london') {
      return {
        latitude: 51.5208,
        longitude: -0.1955,
        what3words: 'filled.london',
      };
    }
    return null;
  },
});

test('valid provider input resolves to coordinates through the LocationResolver boundary', async () => {
  const service = new DeliveryLocationService({ resolver: makeResolver() });
  const delivery = createDelivery({ id: 'D-100' });

  const result = await service.resolveDeliveryLocation(delivery, 'filled.london');

  assert.equal(result.status, 'resolved');
  assert.equal(result.delivery.pendingLocation.latitude, 51.5208);
  assert.equal(result.delivery.pendingLocation.longitude, -0.1955);
});

test('a resolved point must be confirmed before becoming the delivery destination', async () => {
  const service = new DeliveryLocationService({ resolver: makeResolver() });
  const delivery = createDelivery({ id: 'D-101' });

  await service.resolveDeliveryLocation(delivery, 'filled.london');
  const beforeConfirmation = service.getDriverDestination(delivery);

  assert.equal(beforeConfirmation.hasDestination, false);
  assert.equal(delivery.confirmedLocation, null);

  service.confirmDeliveryLocation(delivery);
  const afterConfirmation = service.getDriverDestination(delivery);

  assert.equal(afterConfirmation.hasDestination, true);
  assert.equal(afterConfirmation.coordinates.latitude, 51.5208);
  assert.equal(afterConfirmation.coordinates.longitude, -0.1955);
});

test('unresolved input cannot create a confirmed location', async () => {
  const service = new DeliveryLocationService({ resolver: makeResolver() });
  const delivery = createDelivery({ id: 'D-102' });

  const result = await service.resolveDeliveryLocation(delivery, 'missing.place');

  assert.equal(result.status, 'unresolved');
  assert.equal(delivery.confirmedLocation, null);
  service.confirmDeliveryLocation(delivery);
  assert.equal(delivery.confirmedLocation, null);
});

test('the driver-facing delivery representation contains confirmed coordinates', async () => {
  const service = new DeliveryLocationService({ resolver: makeResolver() });
  const delivery = createDelivery({ id: 'D-103' });

  await service.resolveDeliveryLocation(delivery, 'filled.london');
  service.confirmDeliveryLocation(delivery);

  const driverView = service.getDriverDestination(delivery);
  assert.deepEqual(driverView, {
    hasDestination: true,
    coordinates: {
      latitude: 51.5208,
      longitude: -0.1955,
    },
    sourceAddress: 'filled.london',
    provenance: 'filled.london',
  });
});

test('provider-specific facts remain behind the resolver abstraction and are not the canonical location identity', async () => {
  const resolver = new What3WordsLocationResolver({
    api: {
      resolve: async (address) => ({
        latitude: 51.5208,
        longitude: -0.1955,
        what3words: address,
      }),
      isValidAddress: (address) => address === 'filled.london',
    },
  });

  const result = await resolver.resolve('filled.london');

  assert.deepEqual(result, {
    latitude: 51.5208,
    longitude: -0.1955,
    sourceAddress: 'filled.london',
  });
  assert.equal(result.sourceAddress, 'filled.london');
});

const fs = require('node:fs');
const path = require('node:path');

test('domain code does not directly depend on the what3words adapter', () => {
  const domainFile = path.join(__dirname, '..', 'src', 'delivery-location-service.js');
  const source = fs.readFileSync(domainFile, 'utf8');

  assert.doesNotMatch(source, /what3words|what3Words|What3Words/);
  assert.match(source, /LocationResolver/i);
});
