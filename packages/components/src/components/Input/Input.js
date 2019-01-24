import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.styl';

class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.bool, // eslint-disable-line
    forwardedRef: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    placeholder: undefined,
    forwardedRef: undefined,
    onChange: undefined,
    className: null,
    error: false,
  };

  render() {
    const {
      onChange,
      className,
      value,
      error,
      placeholder,
      forwardedRef,
      ...rest
    } = this.props;

    const classes = cn(
      'gem-input-container',
      {
        'gem-input-error': error,
      },
      className
    );

    /* eslint-disable jsx-a11y/label-has-associated-control */
    /* eslint-disable jsx-a11y/label-has-for */

    return (
      <div className={classes}>
        <input
          className={cn('gem-input', { 'gem-input-filled': !!value })}
          value={value}
          onChange={onChange}
          ref={forwardedRef}
          {...rest}
        />
        {placeholder && (
          <label className="gem-input-label" placeholder={placeholder} />
        )}
      </div>
    );
  }
}

/* eslint-disable */
export default forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
));
