import {
  calculateVerificationScore,
  calculateModuleScore,
} from '../verification';

import moduleControls, { getModuleControlsMap } from '../../moduleControls';

describe('response verification', () => {
  describe('calculateModuleScore()', () => {
    const controlsMap = getModuleControlsMap(moduleControls);

    it('should calculate score for available module', () => {
      const moduleScore = calculateModuleScore('0.1', controlsMap.text);
      expect(moduleScore).toEqual(0.1);
    });

    it('should return undefinedfor unknown module', () => {
      const moduleScore = calculateModuleScore('0.1', controlsMap.unsupported);
      expect(moduleScore).toEqual(undefined);
    });
  });

  describe('calculateVerificationScore()', () => {
    it('it should calculate verification score and ignore unsupported modules', () => {
      const verificationForm = {
        modules: [
          {
            type: 'number',
            name: 'field1',
          },
          {
            type: 'submit',
            name: 'submit',
          },
        ],
      };

      const score = calculateVerificationScore(
        { field1: '12' },
        verificationForm.modules,
        moduleControls
      );
      expect(score).toEqual(1);

      const score2 = calculateVerificationScore(
        { field1: '0.5' },
        verificationForm.modules,
        moduleControls
      );
      expect(score2).toEqual(0.5);

      const score3 = calculateVerificationScore(
        { field1: '-1' },
        verificationForm.modules,
        moduleControls
      );
      expect(score3).toEqual(0);
    });
  });

  it('it should calculate avg score', () => {
    const verificationForm = {
      modules: [
        {
          type: 'number',
          name: 'field1',
        },
        {
          type: 'number',
          name: 'field2',
        },
        {
          type: 'submit',
          name: 'submit',
        },
      ],
    };
    const score = calculateVerificationScore(
      { field1: '0.1', field2: '0.7' },
      verificationForm.modules,
      moduleControls
    );
    expect(score).toEqual(0.4);
  });
});
