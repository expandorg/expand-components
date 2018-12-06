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
    initial: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    inputType: 'text',
    value: undefined,
    initial: null,
    label: null,
    placeholder: '',
  };

  static module = inputMeta;

  state = { touched: false };

  componentDidMount() {
    const { name, value, initial, onChange } = this.props;

    if (initial && value === undefined) {
      onChange(name, initial);
    }
  }

  componentDidUpdate(prevProps) {
    const { name, value, initial, onChange } = this.props;

    const { touched } = this.state;

    if (
      !touched &&
      value === undefined &&
      prevProps.initial !== initial &&
      initial
    ) {
      onChange(name, initial);
    }
  }

  handleChange = ({ target }) => {
    const { name, onChange } = this.props;
    this.setState({ touched: true });
    onChange(name, target.value);
  };

  render() {
    const { inputType, placeholder, label, value, initial } = this.props;
    const { touched } = this.state;

    const val = !value && !touched && initial ? initial : value;

    return (
      <Label className={styles.label} label={label}>
        <UIInput
          type={inputType}
          className={styles.input}
          onChange={this.handleChange}
          value={val}
          autoComplete="off"
          placeholder={placeholder}
        />
      </Label>
    );
  }
}
