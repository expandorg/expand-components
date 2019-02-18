// @flow
import {
  Form,
  formProps,
  formValidationRules,
  getDefaultRuleMessage,
  overrideFormVars,
  FormContext,
  FormData,
  FormDataProvider,
  moduleControls,
  getModuleControlsMap,
  groupModulesByCategory,
  calculateVerificationScore,
  applyVariables,
  getVariablesMap,
  getInitialFormValues,
  PropControlTypes,
  ModuleCategories,
} from './src/form/Form';

import {
  FileUploadServiceBase,
  FileUploadTask,
  UploadState,
} from './src/modules/UploadFile';

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
  overrideFormVars,
  getModuleControlsMap,
  PropControlTypes,
  ModuleCategories,
  getVariablesMap,
  groupModulesByCategory,
  getInitialFormValues,
  Module,
  moduleControls,
  moduleProps,
  ReportForm,
  ReportToggle,
  FileUploadServiceBase,
  FileUploadTask,
  UploadState,
};
