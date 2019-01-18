import React, { forwardRef, createContext } from 'react';

const WalkthroughContext = createContext(null);

export const withWalkthroughContext = Wrapped =>
  forwardRef((props, ref) => (
    <WalkthroughContext.Consumer>
      {value => <Wrapped {...props} {...value} forwardedRef={ref} />}
    </WalkthroughContext.Consumer>
  ));

export default WalkthroughContext;
