// @flow

import {
  formValidationRules,
  getDefaultRuleMessage,
} from './src/form/model/validation';

import {
  applyVariables,
  variablesPropertyFilter,
  getVariablesMap,
  getInitialFormValues,
  overrideFormVars,
  findVariables,
  isVariable,
  getVariableName,
} from './src/form/model/variables';

import {
  verificationFormGenerator,
  previewFormGenerator,
} from './src/form/model/transform';

import {
  calculateModuleScore,
  calculateVerificationScore,
} from './src/form/model/verification/verification';

import {
  getModuleControlsMap,
  getFormModules,
  getFormModulesNames,
  findModuleVisitor,
  dfsVisitor,
} from './src/form/model/modules';

import { getModuleTypes, getReasons } from './src/form/model/reportReasons';

export {
  // validation
  formValidationRules,
  getDefaultRuleMessage,
  // variabels
  overrideFormVars,
  applyVariables,
  variablesPropertyFilter,
  getVariablesMap,
  getInitialFormValues,
  findVariables,
  isVariable,
  getVariableName,
  findModuleVisitor,
  dfsVisitor,
  // verification
  calculateModuleScore,
  calculateVerificationScore,
  // generators
  verificationFormGenerator,
  previewFormGenerator,
  // modules
  getModuleControlsMap,
  getFormModules,
  getFormModulesNames,
  // reasons
  getModuleTypes,
  getReasons,
};
