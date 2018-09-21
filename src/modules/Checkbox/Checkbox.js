import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '../../common/validation';
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

  static module = {
    type: 'checkbox',
    validation: {
      isTrue: rules.isTrue,
    },
    verificationScore: value => (value ? 1 : 0),
    editor: {
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
