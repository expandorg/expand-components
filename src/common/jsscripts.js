// @flow
import { PubSubMap } from './pubsub';

export class JsScripts extends PubSubMap {
  addScript = (
    src: string,
    async: boolean,
    defer: boolean,
    onLoad: Function
  ) => {
    if (!this.hasKey(src)) {
      const script = this.createScript(src, async, defer);
      script.onload = () => {
        this.notify(src);
      };
      document.body.appendChild(script); // eslint-disable-line
    }
    return this.subscribe(src, onLoad);
  };

  isLoaded = (src: string) => {
    const pubSub = this.map.get(src);
    return !!pubSub && pubSub.notified;
  };

  createScript = (src: string, async: boolean, defer: boolean) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;

    return script;
  };
}

export const jsScripts = new JsScripts();
