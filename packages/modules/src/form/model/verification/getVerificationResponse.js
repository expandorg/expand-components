// @flow
import { findModuleVisitor } from '../modules';
import { type Form } from '../types.flow';

export type VerificationResult = {
  score: number,
  reason: string,
};

export default function getVerificationResponse(
  response: Object,
  form: Form
): VerificationResult {
  if (response) {
    const module = Reflect.ownKeys(response)
      .map(field => findModuleVisitor(form.modules, m => m.name === field))
      .filter(Boolean)
      .find(m => m.type === 'verify');

    if (module) {
      return response[module.name];
    }
  }
  return { score: 0, reason: '' };
}
