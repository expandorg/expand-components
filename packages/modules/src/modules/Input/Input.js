import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@gemsorg/validation';

import { Input as UIInput } from '@gemsorg/components';

import Label from '../../components/Label';

import styles from './Input.module.styl';

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
    label: null,
    placeholder: '',
  };

  static module = {
    type: ['text', 'number', 'email', 'password'],
    report: ['Unable to fill field'],
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
      defaults: {
        placeholder: 'some text...',
      },
    },
  };

  handleChange = ({ target }) => {
    const { name, onChange } = this.props;
    onChange(name, target.value);
  };

  render() {
    const { type, placeholder, label, value } = this.props;
    return (
      <Label className={styles.label} label={label}>
        <UIInput
          type={type}
          className={styles.input}
          onChange={this.handleChange}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
        />
      </Label>
    );
  }
}
