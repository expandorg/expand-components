// @flow

declare type Module = {
  name: string,
  type: string,
  modules?: Array<Module>,
  validation?: {
    [key: string]: string
  },
  [key: string]: Module | Array<Module> | string | Object | number | boolean,
};

declare type Form = {
  modules: Array<Module>
}

type totalScoreFn = (scores: Array<?number>) => number;

type verificationScoreFn = (value: any) => number;

type FormBuilderFactory = {
  type: string,
  [prop: string]: string | bool | Array<string>
}

type ModuleEditorMeta = {
  propreties?: {
    [key: string]: FormBuilderFactory
  },
  defaults?: {
    [key: string]: any
  }
}

declare type ModuleControlMeta = {
  type: string,
  title?: string,
  description?: string,
  previewUrl?: string,
  report?: Array<string>,
  validation?:  {
    [validatorName: string]: (value: any) => bool
  },
  editor?: ModuleEditorMeta,
  verificationScore?: verificationScoreFn
}


declare type ModuleControl = {
  module: ModuleControlMeta
}

declare type ModuleControlsMap = {
  [key: string]: ModuleControl
}
