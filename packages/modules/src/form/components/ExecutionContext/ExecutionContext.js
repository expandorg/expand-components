import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import formProps from '../Form/formProps';

const ExecutionContext = createContext(null);

const ExecutionContextProvider = ({
  values,
  variables,
  form,
  controls,
  services,
  isSubmitting,
  onSubmit,
  onValidate,
  children,
}) => (
  <ExecutionContext.Provider
    value={{
      form,
      values,
      variables,
      services,
      controls,
      isSubmitting,
      onValidate,
      onSubmit,
    }}
  >
    {children}
  </ExecutionContext.Provider>
);

ExecutionContextProvider.propTypes = {
  form: formProps.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  variables: PropTypes.shape({}),
  controls: PropTypes.shape({}).isRequired,
  services: PropTypes.shape({}),
  values: PropTypes.shape({}),
  onValidate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ExecutionContextProvider.defaultProps = {
  values: null,
  services: new Map(),
  variables: null,
};

const useExecutionContext = () => {
  return useContext(ExecutionContext);
};

export { ExecutionContext, ExecutionContextProvider, useExecutionContext };
