import React, { createContext, useContext } from 'react';
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

const useFormData = () => {
  return useContext(FormDataContext);
};

export { useFormData, FormDataProvider, FormDataContext };
