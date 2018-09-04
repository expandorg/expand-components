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
