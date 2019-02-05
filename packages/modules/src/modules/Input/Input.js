import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Input as UIInput } from '@expandorg/components';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Input.module.styl';

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    initial: PropTypes.string, // eslint-disable-line
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    inputType: 'text',
    value: undefined,
    initial: null,
    placeholder: '',
  };

  static module = {
    type: 'input',
    name: 'Input',
    report: ['Unable to fill field'],
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
      isNotEmpty: rules.isNotEmpty,
      isEmail: rules.isEmail,
      isNumber: rules.isNumber,
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
    const { inputType, placeholder, value } = this.props;

    return (
      <UIInput
        type={inputType}
        className={styles.input}
        onChange={this.handleChange}
        value={value}
        autoComplete="off"
        placeholder={placeholder}
      />
    );
  }
}
