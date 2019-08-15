import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Input as UIInput, VarsPlaceholder } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Input.module.styl';

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    initial: PropTypes.string, // eslint-disable-line
    isModulePreview: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    inputType: 'text',
    value: undefined,
    initial: null,
    isModulePreview: false,
    placeholder: '',
  };

  static module = {
    type: 'input',
    name: 'Input',
    report: ['Unable to fill field'],
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
      isEmail: rules.isEmail,
      isNumber: rules.isNumber,
      isGreater: rules.isGreater,
      isGreaterOrEqual: rules.isGreaterOrEqual,
      isLess: rules.isLess,
      isLessOrEqual: rules.isLessOrEqual,
      isMinCharacterCount: rules.isMinCharacterCount,
      isMaxCharacterCount: rules.isMaxCharacterCount,
    },
    verificationScore: value => {
      const numeric = +value;
      if (Number.isNaN(numeric)) {
        return 0;
      }
      return Math.min(Math.max(numeric, 0), 1);
    },
    editor: {
      category: ModuleCategories.Input,
      properties: {
        inputType: {
          type: PropControlTypes.enum,
          label: 'Input type',
          options: ['text', 'email', 'password', 'number', 'date'],
        },
        placeholder: {
          type: PropControlTypes.string,
          placeholder: 'Placeholder',
        },
        initial: {
          type: PropControlTypes.string,
          placeholder: 'Default value',
        },
      },
      defaults: {
        inputType: 'text',
        placeholder: 'some text...',
      },
    },
  };

  handleChange = ({ target }) => {
    const { name, onChange } = this.props;
    onChange(name, target.value);
  };

  render() {
    const {
      inputType,
      placeholder,
      value,
      isModulePreview,
      initial,
    } = this.props;

    return (
      <div className={styles.container}>
        <UIInput
          type={inputType}
          className={styles.input}
          onChange={this.handleChange}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
        />
        <VarsPlaceholder
          vval={initial}
          pos="left"
          isModulePreview={isModulePreview}
        />
      </div>
    );
  }
}
