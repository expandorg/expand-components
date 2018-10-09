import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';
import cn from 'classnames';

import './Dialog.styl';

export default class Dialog extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    modalClass: PropTypes.string,
    overlayClass: PropTypes.string,
    contentLabel: PropTypes.string.isRequired,
    hideButton: PropTypes.bool,
    onHide: PropTypes.func,
  };

  static defaultProps = {
    visible: false,
    modalClass: null,
    overlayClass: null,
    hideButton: false,
    onHide: Function.prototype,
  };

  render() {
    const {
      visible,
      onHide,
      children,
      modalClass,
      overlayClass,
      contentLabel,
      hideButton,
    } = this.props;
    return (
      <Modal
        isOpen={visible}
        onRequestClose={onHide}
        className={cn('gem-dialog-modal', modalClass)}
        overlayClassName={cn('gem-dialog-overlay', overlayClass)}
        contentLabel={contentLabel}
      >
        {!hideButton && (
          <button className="gem-dialog-close" onClick={onHide}>
            ✕
          </button>
        )}
        {children}
      </Modal>
    );
  }
}
