// @flow

export class PubSub {
  listeners: Set<Function> = new Set();

  notified: boolean = false;

  sibscribe = (callback: Function) => {
    this.listeners.add(callback);
    return this.unsibscribe.bind(this, callback);
  };

  unsibscribe(callback: Function) {
    if (this.listeners.has(callback)) {
      this.listeners.delete(callback);
    }
  }

  notify = (...args: Array<any>) => {
    this.notified = true;
    this.listeners.forEach(callback => {
      callback(...args);
    });
  };
}

export class PubSubMap {
  map: Map<string, PubSub> = new Map();

  subscribe = (key: string, callback: Function) => {
    let pubSub = this.map.get(key);
    if (!pubSub) {
      pubSub = new PubSub();
      this.map.set(key, pubSub);
    }
    return pubSub.sibscribe(callback);
  };

  hasKey = (key: string) => this.map.has(key);

  notify = (key: string, ...args: Array<any>) => {
    const pubSub = this.map.get(key);
    if (pubSub) {
      pubSub.notify(...args);
    }
  };
}
