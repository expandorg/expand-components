import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Dropdown as UIDropdown, VarsPlaceholder } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Dropdown.module.styl';

export default class Dropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isModulePreview: PropTypes.bool,

    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    label: '',
    value: '',
    isModulePreview: false,
  };

  static module = {
    type: 'dropdown',
    name: 'Dropdown',
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
    },
    editor: {
      category: ModuleCategories.Input,
      properties: {
        label: {
          type: PropControlTypes.string,
          placeholder: 'Dropdown label',
          required: true,
        },
        options: {
          type: PropControlTypes.options,
        },
      },
      defaults: {
        placeholder: 'Select one',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      },
    },
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { options, label, value, isModulePreview } = this.props;
    return (
      <div className={styles.container}>
        <UIDropdown
          value={value}
          label={label}
          options={options}
          onChange={this.handleChange}
        />
        <VarsPlaceholder
          vval={label}
          pos="left"
          vcn={styles.placeholder}
          isModulePreview={isModulePreview}
        />
      </div>
    );
  }
}
