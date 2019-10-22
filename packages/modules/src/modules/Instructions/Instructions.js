import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@expandorg/components';

import Modal from '../../components/Modal';
import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Instructions.module.styl';

export default class Instructions extends Component {
  static propTypes = {
    button: PropTypes.string,
  };

  static defaultProps = {
    button: null,
  };

  static module = {
    type: 'instructions',
    name: 'Instructions',
    editor: {
      category: ModuleCategories.Display,
      properties: {
        button: {
          type: PropControlTypes.string,
          placeholder: 'button caption',
        },
        modules: {
          type: PropControlTypes.modules,
          caption: 'Drop dialog content here',
        },
      },
      defaults: {
        button: 'Instructions',
      },
    },
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const { button, children } = this.props;
    const { visible } = this.state;

    return (
      <div className={styles.container}>
        <Button
          className={styles.button}
          theme="white-blue"
          onClick={this.handleToggle}
        >
          {button}
          <VarsPlaceholder vval={button} pos="center" />
        </Button>
        <Modal visible={visible} onHide={this.handleToggle} button="Close">
          {children}
        </Modal>
      </div>
    );
  }
}
