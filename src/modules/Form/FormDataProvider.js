import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormContext from './FormContext';

export default class FormDataProvider extends Component {
  static propTypes = {
    formData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    formData: null,
  };

  render() {
    const { children, formData } = this.props;
    return (
      <FormContext.Provider value={formData}>{children}</FormContext.Provider>
    );
  }
}
