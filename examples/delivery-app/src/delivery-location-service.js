class LocationResolver {
  async resolve() {
    throw new Error('LocationResolver.resolve must be implemented by an adapter');
  }
}

class DeliveryLocationService {
  constructor({ resolver = new LocationResolver() }) {
    this.resolver = resolver;
  }

  async resolveDeliveryLocation(delivery, address) {
    const resolved = await this.resolver.resolve(address);

    if (!resolved) {
      delivery.pendingLocation = null;
      delivery.confirmedLocation = null;
      return { status: 'unresolved', delivery };
    }

    delivery.pendingLocation = {
      latitude: resolved.latitude,
      longitude: resolved.longitude,
      source: 'resolved',
      sourceAddress: resolved.sourceAddress ?? address,
    };
    delivery.confirmedLocation = null;
    return { status: 'resolved', delivery };
  }

  confirmDeliveryLocation(delivery) {
    if (!delivery.pendingLocation) {
      return { status: 'not-ready', delivery };
    }

    delivery.confirmedLocation = {
      latitude: delivery.pendingLocation.latitude,
      longitude: delivery.pendingLocation.longitude,
      source: delivery.pendingLocation.sourceAddress,
      sourceAddress: delivery.pendingLocation.sourceAddress,
    };

    delivery.locationProvenance = delivery.pendingLocation.sourceAddress;
    return { status: 'confirmed', delivery };
  }

  getDriverDestination(delivery) {
    if (!delivery.confirmedLocation) {
      return { hasDestination: false };
    }

    return {
      hasDestination: true,
      coordinates: {
        latitude: delivery.confirmedLocation.latitude,
        longitude: delivery.confirmedLocation.longitude,
      },
      sourceAddress: delivery.confirmedLocation.sourceAddress,
      provenance: delivery.locationProvenance,
    };
  }
}

function createDelivery({ id }) {
  return {
    id,
    pendingLocation: null,
    confirmedLocation: null,
    locationProvenance: null,
  };
}

module.exports = {
  DeliveryLocationService,
  LocationResolver,
  createDelivery,
};
