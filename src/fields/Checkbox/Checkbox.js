import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UICheckbox from '../../components/Checkbox';

import styles from './Checkbox.module.styl';

export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    label: '',
    value: undefined,
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { label, name, value } = this.props;
    return (
      <UICheckbox
        className={styles.checkbox}
        name={name}
        label={label}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
