import React from 'react';

import { useExecutionContext } from '../ExecutionContext';
import VisibilityLogic from './VisibilityLogic';
import { useVarsPreviewContext } from '../VarsPlaceholder';

import moduleProps from '../Module/moduleProps';

export default function Logic({ children, module }) {
  const { values, variables } = useExecutionContext();
  const isModulePreview = useVarsPreviewContext();

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
  module: moduleProps.isRequired,
};
