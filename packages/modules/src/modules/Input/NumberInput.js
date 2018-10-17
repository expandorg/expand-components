import React, { Component } from 'react';

import inputMeta from './inputMeta';

import InputControl from './InputControl';

export default class NumberInput extends Component {
  static module = {
    type: 'number',
    name: 'Number Input',
    ...inputMeta,
  };

  render() {
    return <InputControl inputType="number" {...this.props} />;
  }
}
