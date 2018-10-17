import React, { Component } from 'react';

import inputMeta from './inputMeta';

import InputControl from './InputControl';

export default class NumberInput extends Component {
  static module = {
    type: 'text',
    name: 'Text Input',
    ...inputMeta,
  };

  render() {
    return <InputControl inputType="text" {...this.props} />;
  }
}
