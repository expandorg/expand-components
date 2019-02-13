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
  getInitialFormValues,
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
