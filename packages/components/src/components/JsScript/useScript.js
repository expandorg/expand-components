import { useState, useEffect } from 'react';
import { useService } from '../ServiceProvider';

export default function JsScript(
  src,
  disable = false,
  async = true,
  defer = false
) {
  const services = useService();
  const jsScripts = services.resolve('jsScripts');

  const [loaded, setLoaded] = useState(jsScripts.isLoaded(src));

  useEffect(() => {
    let unsubsribe = null;
    if (!disable) {
      unsubsribe = jsScripts.addScript(src, async, defer, () =>
        setLoaded(true)
      );
    }
    return () => {
      if (unsubsribe) {
        unsubsribe();
      }
    };
  }, [disable, src, async, defer]);

  return loaded;
}
