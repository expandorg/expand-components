// @flow
import { findModuleVisitor } from '../modules';
import { type Form, type ModuleControl } from '../types.flow';
import { calculateVerificationScore } from './score';

export type VerificationResult = {
  score: number,
  reason: string,
};

export default function getVerificationResponse(
  response: Object,
  form: Form,
  controls: Array<ModuleControl>
): VerificationResult {
  if (!response) {
    return { score: 0, reason: '' };
  }
  const verify = Reflect.ownKeys(response)
    .map(field => findModuleVisitor(form.modules, m => m.name === field))
    .filter(Boolean)
    .find(m => m.type === 'verify');

  if (verify) {
    return response[verify.name];
  }

  // fallback method
  return {
    score: calculateVerificationScore(response, form.modules, controls),
    reason: '',
  };
}
