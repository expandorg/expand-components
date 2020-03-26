import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { ReactComponent as X } from '@expandorg/uikit/assets/x.svg';

import styles from './Notification.module.styl';

export default function Notification({ notification, onClear }) {
  const clear = useCallback(
    (evt) => {
      evt.preventDefault();
      onClear();
    },
    [onClear]
  );

  return (
    <div className={cn(styles.container, styles[notification.type])}>
      <div className={styles.message}>{notification.message}</div>
      <button onClick={clear} className={styles.x}>
        <X />
      </button>
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    type: PropTypes.oneOf(['warning', 'error', 'message', 'success'])
      .isRequired,
    message: PropTypes.string,
  }).isRequired,
  onClear: PropTypes.func.isRequired,
};
