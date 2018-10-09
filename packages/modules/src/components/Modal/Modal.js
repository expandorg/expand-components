import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogHeadline, Button } from '@gemsorg/components';

import Alignment from '../../components/Alignment';

import styles from './Modal.module.styl';

export default class Modal extends Component {
  static propTypes = {
    headline: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,

    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  render() {
    const { button, headline, children, onHide, visible } = this.props;

    return (
      <Dialog visible={visible} onHide={onHide} contentLabel="modal">
        {headline && <DialogHeadline>{headline}</DialogHeadline>}
        <div className={styles.container}>
          {children}
          <Alignment padding="medium" justify="left">
            <Button className={styles.confirm} onClick={onHide}>
              {button}
            </Button>
          </Alignment>
        </div>
      </Dialog>
    );
  }
}
