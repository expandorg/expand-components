import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';
import { Checkbox as UICheckbox } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Checkbox.module.styl';

export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.bool,
    isModulePreview: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    label: '',
    isModulePreview: false,
    value: undefined,
  };

  static module = {
    type: 'checkbox',
    name: 'Checkbox',
    isInput: true,
    validation: {
      isTrue: rules.isTrue,
    },
    verificationScore: value => (value ? 1 : 0),
    editor: {
      category: ModuleCategories.Input,
      properties: {
        label: {
          type: PropControlTypes.string,
          placeholder: 'Checkbox label',
        },
      },
      defaults: {
        label: 'Checkbox label',
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { label, name, value, isModulePreview } = this.props;
    return (
      <UICheckbox
        isModulePreview={isModulePreview}
        className={styles.checkbox}
        value={value}
        label={label}
        name={name}
        onChange={this.handleChange}
      />
    );
  }
}
