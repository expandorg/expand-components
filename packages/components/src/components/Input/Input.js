import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.styl';

import InputLabel from './InputLabel';

export class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.bool, // eslint-disable-line
    theme: PropTypes.oneOf(['default', 'white']),
    forwardedRef: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    placeholder: undefined,
    forwardedRef: undefined,
    onChange: undefined,
    className: null,
    theme: 'default',
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
      theme,
      ...rest
    } = this.props;

    const classes = cn(
      'gem-input-container',
      `gem-input-theme-${theme}`,
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
          value={value || ''}
          onChange={onChange}
          ref={forwardedRef}
          {...rest}
        />
        <InputLabel placeholder={placeholder} />
      </div>
    );
  }
}

/* eslint-disable */
export default forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
));
