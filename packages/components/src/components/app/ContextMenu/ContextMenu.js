import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import useClickOutside from '../../hooks/useClickOutside';

import './styles.styl';

export default function ContextMenu({ onHide, className, children }) {
  const ref = useRef();
  useClickOutside(ref, evt => onHide(evt));

  return (
    <div ref={ref} className={cn('gem-contextmenu', className)}>
      {children}
    </div>
  );
}

ContextMenu.propTypes = {
  onHide: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ContextMenu.defaultProps = {
  className: null,
};
