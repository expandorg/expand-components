import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.styl';

import InputLabel from './InputLabel';

export function Input({
  onChange,
  className,
  value,
  error,
  placeholder,
  forwardedRef,
  children,
  theme,
  ...rest
}) {
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
      <InputLabel placeholder={placeholder} theme={theme} />
      {children}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  theme: PropTypes.oneOf(['default', 'white', 'transparent']),
  forwardedRef: PropTypes.shape({}),
};

Input.defaultProps = {
  value: undefined,
  placeholder: undefined,
  forwardedRef: undefined,
  onChange: undefined,
  className: null,
  theme: 'default',
  error: false,
};

/* eslint-disable */
export default forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
));
