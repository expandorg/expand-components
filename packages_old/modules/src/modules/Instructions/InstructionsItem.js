import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@expandorg/components';

import Modal from '../../components/Modal';

import styles from './Instructions.module.styl';

export default class InstructionsItem extends Component {
  static propTypes = {
    action: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: null,
  };

  static module = {
    type: 'instructionsItem',
    name: 'Instructions Item',
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => ({
      visible: !visible,
    }));
  };

  render() {
    const { action, children, title } = this.props;
    const { visible } = this.state;
    return (
      <>
        <Button
          size="small"
          theme="link"
          className={styles.button}
          onClick={this.handleToggle}
        >
          {action}
        </Button>
        <Modal
          visible={visible}
          onHide={this.handleToggle}
          headline={title}
          button="Close"
        >
          {children}
        </Modal>
        <div className={styles.spacer} />
      </>
    );
  }
}
