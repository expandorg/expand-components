import React, { Component } from 'react';

import inputMeta from './inputMeta';

import InputControl from './InputControl';

export default class EmailInput extends Component {
  static module = {
    type: 'email',
    name: 'Email Input',
    ...inputMeta,
  };

  render() {
    return <InputControl inputType="email" {...this.props} />;
  }
}
