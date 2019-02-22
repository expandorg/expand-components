import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import formProps from './formProps';

const ExecutionContext = createContext(null);

const ExecutionContextProvider = ({
  values,
  variables,
  form,
  controls,
  services,
  children,
}) => (
  <ExecutionContext.Provider
    value={{ form, values, variables, services, controls }}
  >
    {children}
  </ExecutionContext.Provider>
);

ExecutionContextProvider.propTypes = {
  form: formProps.isRequired,
  variables: PropTypes.shape({}),
  controls: PropTypes.shape({}).isRequired,
  services: PropTypes.shape({}),
  values: PropTypes.shape({}),
};

ExecutionContextProvider.defaultProps = {
  values: null,
  services: new Map(),
  variables: null,
};

const ExecutionContextClient = ({ children }) => (
  <ExecutionContext.Consumer>
    {data => children(data)}
  </ExecutionContext.Consumer>
);

export { ExecutionContext, ExecutionContextProvider, ExecutionContextClient };
