import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Textarea.styl';

class Textarea extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    forwardedRef: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    forwardedRef: undefined,
    value: undefined,
    onChange: undefined,
    className: null,
  };

  render() {
    const { className, forwardedRef, ...rest } = this.props;
    return (
      <textarea
        ref={forwardedRef}
        {...rest}
        className={cn('gem-textarea', className)}
      />
    );
  }
}

export default forwardRef((props, ref) => (
  <Textarea {...props} forwardedRef={ref} />
));
