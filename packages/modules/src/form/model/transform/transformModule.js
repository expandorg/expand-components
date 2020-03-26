// @flow
import type { Module } from '../types.flow';

export type TransformFn = (module: Module) => ?Module;

export type TransformDecorator = (
  original: Module,
  transform: TransformFn
) => TransformFn;

export const identityTransform: TransformFn = (m) => m;

export const nullTransform: TransformFn = () => null;

export const identityDecorator: TransformDecorator = (m, f) => f;

export function transformModule(
  module: Module,
  transformMap: { [name: string]: TransformFn },
  decorate?: TransformDecorator = identityDecorator
): ?Module {
  const { modules: nested, ...rest } = module;
  const fn = decorate(module, transformMap[module.type] || identityTransform);

  const result = fn(rest);

  if (!result) {
    return result;
  }

  if (!nested) {
    return result;
  }

  return {
    ...result,
    modules: nested
      .map((child) => transformModule(child, transformMap, decorate))
      .filter(Boolean),
  };
}
