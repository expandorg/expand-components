// @flow
import Form from './Form';
import formProps from './formProps';
import formValidationRules from './validation/formValidationRules';
import getDefaultRuleMessage from './validation/getDefaultRuleMessage';
import { calculateVerificationScore } from './verification/verification';

import FormContext from './data/FormContext';
import FormDataProvider from './data/FormDataProvider';
import FormData from './data/FormData';
import moduleControls, {
  getModuleControlsMap,
  groupModulesByCategory,
} from './moduleControls';

import applyVariables from './variables/applyVariables';
import getVariablesMap from './variables/getVariablesMap';
import getInitialFormValues from './variables/getInitialFormValues';
import overrideFormVars from './variables/overrideFormVars';

import PropControlTypes from './PropControlTypes';
import ModuleCategories from './ModuleCategories';

export {
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
};
