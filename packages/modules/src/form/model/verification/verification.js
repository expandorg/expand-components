// @flow
import { getModuleControlsMap, findModuleVisitor } from '../modules';
import { type Module, type ModuleControl } from '../types.flow';

export const avg = (values: Array<?number>): number => {
  const filtered = values.filter(v => typeof v !== 'undefined');
  if (!filtered.length) {
    return 0;
  }
  const sum = filtered.reduce((all, next) => all + next, 0);
  return Math.round((sum / values.length) * 1000) / 1000;
};

export const calculateModuleScore = (
  value: any,
  Control: ModuleControl
): ?number => {
  if (!Control || !Control.module || !Control.module.verificationScore) {
    return undefined;
  }
  return Control.module.verificationScore(value);
};

export type TotalScoreFn = (scores: Array<?number>) => number;

export type VerificationResult = {
  score: number,
  reason: string,
};

export const calculateVerificationScore = (
  response: Object,
  form: Array<Module>,
  controls: Array<ModuleControl>,
  scoreMethod: TotalScoreFn = avg
): VerificationResult => {
  if (!response) {
    return { score: 0, reason: '' };
  }
  const controlsMap = getModuleControlsMap(controls);

  const scores = Reflect.ownKeys(response).map(fieldName => {
    const module = findModuleVisitor(form, m => m.name === fieldName);
    if (module === null || module === undefined) {
      return undefined;
    }
    return calculateModuleScore(response[fieldName], controlsMap[module.type]);
  });
  const score = scoreMethod(scores);
  return { score, reason: '' };
};
