import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function ContextMenuItem({
  className,
  onClick,
  children,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={cn('gem-contextmenu-item', className)}
      {...rest}
    >
      {children}
    </button>
  );
}

ContextMenuItem.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ContextMenuItem.defaultProps = {
  onClick: Function.prototype,
  className: null,
};
