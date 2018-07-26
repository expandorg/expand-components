import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Textarea.styl';

class Textarea extends Component {
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
      <textarea
        ref={forwardedRef}
        {...rest}
        className={cn('gem-textarea', className)}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export default forwardRef((props, ref) => (
  <Textarea {...props} forwardedRef={ref} />
));
