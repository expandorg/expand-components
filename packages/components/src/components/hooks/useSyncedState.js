// @flow

import { useState, useEffect } from 'react';

type Fn = (o: any) => any;

const noop: Fn = (o) => o;

export default function useSyncedState(property: any, transform: Fn = noop) {
  // $FlowFixMe
  const [v, set] = useState(transform(property));

  useEffect(() => {
    set(transform(property));
  }, [property, transform]);

  return [v, set];
}
