// @flow
import {
  Form,
  formProps,
  ValuesContext,
  ValuesContextClient,
  FormData,
  FormDataProvider,
} from './src/form/components/Form';

import {
  Module,
  moduleProps,
  PropControlTypes,
  ModuleCategories,
} from './src/form/components/Module';
import { ReportForm, ReportToggle } from './src/form/components/Report';

import {
  FileUploadServiceBase,
  FileUploadTask,
  UploadState,
} from './src/modules/UploadFile';
import FileUploadServiceMock from './src/form/components/Playground/FileUploadServiceMock';

export {
  // Form
  Form,
  formProps,
  FormData,
  FormDataProvider,
  ValuesContext,
  ValuesContextClient,
  // base modules
  Module,
  moduleProps,
  PropControlTypes,
  ModuleCategories,
  // reporting
  ReportForm,
  ReportToggle,
  // utilities
  FileUploadServiceMock,
  FileUploadServiceBase,
  FileUploadTask,
  UploadState,
};
