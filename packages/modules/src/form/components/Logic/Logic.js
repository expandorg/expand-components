import React from 'react';
import PropTypes from 'prop-types';

import { useExecutionContext } from '../ExecutionContext';
import VisibilityLogic from './VisibilityLogic';

import moduleProps from '../Module/moduleProps';

export default function Logic({ children, module, isModulePreview }) {
  const { values, variables } = useExecutionContext();

  if (!module.logic || isModulePreview) {
    return children;
  }
  return (
    <VisibilityLogic module={module} values={values} variables={variables}>
      {children}
    </VisibilityLogic>
  );
}

Logic.propTypes = {
  isModulePreview: PropTypes.bool,
  module: moduleProps.isRequired,
};

Logic.defaultProps = {
  isModulePreview: false,
};
