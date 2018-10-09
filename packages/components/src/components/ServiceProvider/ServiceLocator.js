// @flow

export default class ServiceLocator {
  services: Map<string, Object> = new Map();

  register = (name: string, service: Object): ServiceLocator => {
    this.services.set(name, service);
    return this;
  };

  resolve = (name: string): Object => {
    const service = this.services.get(name);
    if (!service) {
      throw new Error(`Unable to resolve service: ${name}`);
    }
    return service;
  };

  clear = () => this.services.clear();
}
