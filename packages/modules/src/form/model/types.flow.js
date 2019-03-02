// @flow

export type Module = {
  name: string,
  type: string,
  modules?: Array<Module>,
  validation?: {
    [key: string]: string | boolean,
  },
  logic?: {
    visibility?: {
      condition: Array<string>,
      success: boolean,
    },
  },
  [key: string]: string | Object | number | boolean,
};

export type Form = {
  modules: Array<Module>,
};

export type ModuleControlMeta = {
  type: string,
  title?: string,
  description?: string,
  previewUrl?: string,
  report?: Array<string>,
  isInput?: boolean,
  validation?: {
    [validatorName: string]: (value: any) => boolean,
  },
  editor?: {
    category: string,
    properties?: {
      [key: string]: {
        type: string,
        [prop: string]: string | boolean | Array<string>,
      },
    },
    defaults?: {
      [key: string]: any,
    },
  },
  verificationScore?: (value: any) => number,
};

export type ModuleControl = {
  module: ModuleControlMeta,
};

export type ModuleControlsMap = {
  [key: string]: ModuleControl,
};
