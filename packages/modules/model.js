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
  calculateModuleScore,
  calculateVerificationScore,
} from './src/form/model/verification/verification';

import {
  getModuleControlsMap,
  groupModulesByCategory,
  getFormModulesNames,
  deepCopyModule,
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
  // verification
  calculateModuleScore,
  calculateVerificationScore,
  // modules
  getModuleControlsMap,
  groupModulesByCategory,
  getFormModulesNames,
  deepCopyModule,
  // reasons
  getModuleTypes,
  getReasons,
};
