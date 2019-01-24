import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { ReactComponent as X } from '@expandorg/uikit/assets/x.svg';

import styles from './Notification.module.styl';

export default class Notification extends Component {
  static propTypes = {
    notification: PropTypes.shape({
      type: PropTypes.oneOf(['warning', 'error', 'message', 'success'])
        .isRequired,
      message: PropTypes.string,
    }).isRequired,
    onClear: PropTypes.func.isRequired,
  };

  handleClick = evt => {
    evt.preventDefault();
    const { onClear } = this.props;
    onClear();
  };

  render() {
    const { notification } = this.props;
    return (
      <div className={cn(styles.container, styles[notification.type])}>
        <div className={styles.message}>{notification.message}</div>
        <button onClick={this.handleClick} className={styles.x}>
          <X />
        </button>
      </div>
    );
  }
}
