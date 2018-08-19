import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import Button from '../../components/Button';

import styles from './Instructions.module.styl';

export default class InstructionsItem extends Component {
  static propTypes = {
    action: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: null,
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
      <Fragment>
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
      </Fragment>
    );
  }
}
