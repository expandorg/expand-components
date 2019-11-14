// @flow
import { findModuleVisitor } from '../modules';
import { type Module } from '../types.flow';

export type VerificationResult = {
  score: number,
  reason: string,
};

// eslint-disable-next-line import/prefer-default-export
export const calculateVerificationScore = (
  response: Object,
  form: Array<Module>
): VerificationResult => {
  if (response) {
    const module = Reflect.ownKeys(response)
      .map(field => findModuleVisitor(form, m => m.name === field))
      .filter(Boolean)
      .find(m => m.type === 'verify');

    if (module) {
      return response[module.name];
    }
  }
  return { score: 0, reason: '' };
};
