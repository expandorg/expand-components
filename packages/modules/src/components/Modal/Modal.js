import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dialog, Button } from '@expandorg/components';

import styles from './Modal.module.styl';

export default class Modal extends Component {
  static propTypes = {
    button: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  render() {
    const { button, children, onHide, visible } = this.props;

    return (
      <Dialog visible={visible} onHide={onHide} contentLabel="modal">
        <div className={styles.container}>
          <div className={styles.inner}>
            {children}
            <div className={styles.actions}>
              <Button className={styles.button} onClick={onHide}>
                {button}
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}
