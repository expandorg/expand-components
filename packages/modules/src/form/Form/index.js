// @flow
import Form from './Form';
import formProps from './formProps';
import formValidationRules from './validation/formValidationRules';
import { calculateVerificationScore } from './verification/verification';

import FormContext from './data/FormContext';
import FormDataProvider from './data/FormDataProvider';
import FormData from './data/FormData';
import moduleControls, { getModuleControlsMap } from './moduleControls';
import applyVariables from './variables/applyVariables';
import getVariablesMap from './variables/getVariablesMap';

export {
  Form,
  formProps,
  formValidationRules,
  FormContext,
  FormData,
  FormDataProvider,
  moduleControls,
  getModuleControlsMap,
  calculateVerificationScore,
  applyVariables,
  getVariablesMap,
};
