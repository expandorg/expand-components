import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIInput from '../components/Input/Input';

import FieldType from './fieldType';
import { fieldProps } from './propTypes';

import styles from './Input.module.styl';

const inputTypes = {
  [FieldType.text]: 'text',
  [FieldType.number]: 'text',
  [FieldType.email]: 'email',
  [FieldType.password]: 'password',
};

export default class Input extends Component {
  static propTypes = {
    field: PropTypes.shape(fieldProps).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
  };

  handleChange = ({ target }) => {
    const { field, onChange } = this.props;
    onChange(field.name, target.value);
  };

  render() {
    const { field, value } = this.props;
    const type = inputTypes[field.type];
    return (
      <UIInput
        type={type}
        className={styles.input}
        onChange={this.handleChange}
        value={value}
        autoComplete="off"
        placeholder={field.placeholder}
      />
    );
  }
}
