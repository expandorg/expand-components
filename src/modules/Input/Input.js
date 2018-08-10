import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIInput from '../../components/Input';

import ModuleType from '../Module/ModuleType';

import styles from './Input.module.styl';

const inputTypes = {
  [ModuleType.text]: 'text',
  [ModuleType.number]: 'number',
  [ModuleType.email]: 'email',
  [ModuleType.password]: 'password',
};

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
    placeholder: '',
  };

  handleChange = ({ target }) => {
    const { name, onChange } = this.props;
    onChange(name, target.value);
  };

  render() {
    const { type, placeholder, value } = this.props;
    const inputType = inputTypes[type];
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
