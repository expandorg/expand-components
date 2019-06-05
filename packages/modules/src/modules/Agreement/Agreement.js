import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Button, Checkbox, VarsPlaceholder } from '@expandorg/components';

import Modal from '../../components/Modal';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Agreement.module.styl';

export default class Agreement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    button: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool,
    isModulePreview: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: false,
    isModulePreview: false,
    button: null,
  };

  static module = {
    type: 'agreement',
    name: 'License Agreement',
    validation: {
      isTrue: rules.isTrue,
    },
    editor: {
      category: ModuleCategories.Display,
      properties: {
        label: {
          type: PropControlTypes.string,
          placeholder: 'Checkbox label',
          required: true,
        },
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
        button: 'Rules',
        label: 'You must agree with rules',
        modules: [
          {
            name: 'header',
            type: 'text',
            style: 'body',
            content: 'test',
          },
        ],
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
    const {
      value,
      name,
      button,
      children,
      label,
      onChange,
      isModulePreview,
    } = this.props;
    const { visible } = this.state;

    return (
      <div className={styles.container}>
        {button && (
          <Button className={styles.button} onClick={this.handleToggle}>
            {button}
            <VarsPlaceholder
              vval={button}
              isModulePreview={isModulePreview}
              inline
            />
          </Button>
        )}
        <Checkbox
          isModulePreview={isModulePreview}
          name={name}
          label={label}
          value={value}
          onChange={changed => onChange(name, changed)}
        />
        {button && (
          <Modal visible={visible} onHide={this.handleToggle} button="Close">
            {children}
          </Modal>
        )}
      </div>
    );
  }
}
