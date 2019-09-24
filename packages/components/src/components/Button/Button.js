import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.styl';

export function Button({
  children,
  type,
  className,
  theme,
  size,
  forwardedRef,
  ...rest
}) {
  const classes = cn(
    'gem-button',
    `gem-button-${theme}`,
    `gem-button-${size}`,
    className
  );

  return (
    <button type={type} className={classes} {...rest} ref={forwardedRef}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  forwardedRef: PropTypes.object, // eslint-disable-line
};

Button.defaultProps = {
  className: null,
  forwardedRef: undefined,
  type: 'button',
  size: 'medium',
  theme: null,
};

/* eslint-disable */
export default forwardRef((props, ref) => (
  <Button {...props} forwardedRef={ref} />
));
