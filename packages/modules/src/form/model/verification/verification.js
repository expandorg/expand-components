// @flow
import { getModuleControlsMap } from '../modules';
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

type TotalScoreFn = (scores: Array<?number>) => number;

export const calculateVerificationScore = (
  response: Object,
  formModules: Array<Module>,
  controls: Array<ModuleControl>,
  scoreMethod: TotalScoreFn = avg
) => {
  if (!response) {
    return 0;
  }
  const controlsMap = getModuleControlsMap(controls);

  const moduleScores = Reflect.ownKeys(response).map(fieldName => {
    const formModule = formModules.find(m => m.name === fieldName);
    if (typeof formModule === 'undefined') {
      return undefined;
    }
    return calculateModuleScore(
      response[fieldName],
      controlsMap[formModule.type]
    );
  });

  return scoreMethod(moduleScores);
};
