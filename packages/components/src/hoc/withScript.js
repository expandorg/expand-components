import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';

import JsScript from '../components/JsScript';

const withScript = (
  src,
  async = true,
  defer = false,
  disable = false
) => Wrapped => {
  class WithScriptWrapper extends Component {
    static propTypes = {
      forwardedRef: PropTypes.func,
    };

    static defaultProps = {
      forwardedRef: null,
    };

    render() {
      const { forwardedRef, ...rest } = this.props;
      return (
        <JsScript src={src} async={async} defer={defer} disable={disable}>
          {({ jsLoaded }) => (
            <Wrapped ref={forwardedRef} jsLoaded={jsLoaded} {...rest} />
          )}
        </JsScript>
      );
    }
  }
  return forwardRef((props, ref) => (
    <WithScriptWrapper {...props} forwardedRef={ref} />
  ));
};

export default withScript;
