import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.styl';

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    forwardedRef: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    forwardedRef: undefined,
    onChange: undefined,
    className: null,
  };

  render() {
    const { onChange, className, value, forwardedRef, ...rest } = this.props;
    return (
      <input
        ref={forwardedRef}
        {...rest}
        className={cn('gem-input', className)}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export default forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
));
