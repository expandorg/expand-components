import React, { Component } from 'react';

import FormContext from './FormContext';

export default class FormData extends Component {
  render() {
    const { children } = this.props;
    return (
      <FormContext.Consumer>
        {formData => children({ formData })}
      </FormContext.Consumer>
    );
  }
}
