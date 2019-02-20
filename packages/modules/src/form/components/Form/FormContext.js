import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const FormContext = createContext(null);

class FormDataProvider extends Component {
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

const FormData = ({ children }) => (
  <FormContext.Consumer>
    {formData => children({ formData })}
  </FormContext.Consumer>
);

export { FormData, FormDataProvider, FormContext };
