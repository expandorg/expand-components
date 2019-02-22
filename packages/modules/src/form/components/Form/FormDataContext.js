import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const FormDataContext = createContext(null);

const FormDataProvider = ({ children, formData }) => (
  <FormDataContext.Provider value={formData}>
    {children}
  </FormDataContext.Provider>
);

FormDataProvider.propTypes = {
  formData: PropTypes.shape({}),
};

FormDataProvider.defaultProps = {
  formData: null,
};

const FormData = ({ children }) => (
  <FormDataContext.Consumer>
    {formData => children({ formData })}
  </FormDataContext.Consumer>
);

export { FormData, FormDataProvider, FormDataContext };
