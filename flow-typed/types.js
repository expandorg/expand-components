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

declare type ModuleControlMeta = {
  type: string,
  report?: Array<string>,
  validation?:  {
    [validatorName: string]: (value: any) => bool
  },
  editor?: {
    defaults?: {
      [key: string]: any
    }
  },
  verificationScore?: verificationScoreFn
}


declare type ModuleControl = {
  module: ModuleControlMeta
}

declare type ModuleControlsMap = {
  [key: string]: ModuleControl
}
