const { LocationResolver } = require('./delivery-location-service');

class What3WordsLocationResolver extends LocationResolver {
  constructor({ api }) {
    super();
    this.api = api;
  }

  async resolve(address) {
    if (!this.api || typeof this.api.resolve !== 'function') {
      throw new Error('Location resolver API not configured');
    }

    const result = await this.api.resolve(address);
    if (!result) {
      return null;
    }

    return {
      latitude: result.latitude,
      longitude: result.longitude,
      sourceAddress: result.what3words ?? result.sourceAddress ?? address,
    };
  }
}

module.exports = {
  What3WordsLocationResolver,
};
