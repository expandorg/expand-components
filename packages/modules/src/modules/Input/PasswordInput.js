import React, { Component } from 'react';

import inputMeta from './inputMeta';

import InputControl from './InputControl';

export default class PasswordInput extends Component {
  static module = {
    type: 'password',
    name: 'Password Input',
    ...inputMeta,
  };

  render() {
    return <InputControl inputType="password" {...this.props} />;
  }
}
