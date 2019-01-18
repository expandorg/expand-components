// @flow

import {
  Form,
  formProps,
  formValidationRules,
  getDefaultRuleMessage,
  FormContext,
  FormData,
  FormDataProvider,
  moduleControls,
  getModuleControlsMap,
  calculateVerificationScore,
  applyVariables,
  getVariablesMap,
  groupModulesByCategory,
  PropControlTypes,
  ModuleCategories,
} from './src/form/Form';

import { Module, moduleProps } from './src/form/Module';
import { ReportForm, ReportToggle } from './src/form/Report';

export {
  applyVariables,
  calculateVerificationScore,
  Form,
  FormContext,
  FormData,
  FormDataProvider,
  formProps,
  formValidationRules,
  getDefaultRuleMessage,
  getModuleControlsMap,
  PropControlTypes,
  ModuleCategories,
  getVariablesMap,
  groupModulesByCategory,
  Module,
  moduleControls,
  moduleProps,
  ReportForm,
  ReportToggle,
};
