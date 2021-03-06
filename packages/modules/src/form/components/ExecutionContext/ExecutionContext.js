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
  onModuleError,
  onSubmit,
  onValidate,
  onNotify,
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
      onModuleError,
      onValidate,
      onNotify,
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
  onModuleError: PropTypes.func,
  onValidate: PropTypes.func.isRequired,
  onNotify: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ExecutionContextProvider.defaultProps = {
  onModuleError: Function.prototype,
  values: null,
  services: new Map(),
  variables: null,
};

const useExecutionContext = () => {
  return useContext(ExecutionContext);
};

export { ExecutionContext, ExecutionContextProvider, useExecutionContext };
