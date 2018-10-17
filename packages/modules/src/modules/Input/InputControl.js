import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@gemsorg/validation';

import { Input as UIInput } from '@gemsorg/components';

import Label from '../../components/Label';

import inputMeta from './inputMeta';

import styles from './Input.module.styl';

// type: ['text', 'number', 'email', 'password'],

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    inputType: 'text',
    value: '',
    label: null,
    placeholder: '',
  };

  static module = inputMeta;

  handleChange = ({ target }) => {
    const { name, onChange } = this.props;
    onChange(name, target.value);
  };

  render() {
    const { inputType, placeholder, label, value } = this.props;
    return (
      <Label className={styles.label} label={label}>
        <UIInput
          type={inputType}
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
