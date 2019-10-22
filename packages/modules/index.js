// @flow
import {
  Form,
  formProps,
  FormData,
  FormDataProvider,
  FormDataContext,
} from './src/form/components/Form';

import {
  ExecutionContext,
  ExecutionContextProvider,
  useExecutionContext,
} from './src/form/components/ExecutionContext';

import {
  VarsPreviewContext,
  VarsPreviewContextProvider,
  useVarsPreviewContext,
  VarsPlaceholder,
} from './src/form/components/VarsPlaceholder';

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
  FormDataContext,
  ExecutionContext,
  ExecutionContextProvider,
  useExecutionContext,
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
  // vars preview
  VarsPreviewContext,
  VarsPreviewContextProvider,
  useVarsPreviewContext,
  VarsPlaceholder,
};
