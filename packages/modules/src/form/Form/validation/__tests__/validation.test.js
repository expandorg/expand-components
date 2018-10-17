import { validateForm } from '@gemsorg/validation';

import formValidationRules from '../formValidationRules';

describe('form validation', () => {
  const form = {
    modules: [
      {
        type: 'module1',
        name: 'field1',
        validation: {
          isDefined: 'is defined',
          notZero: 'not zero',
        },
      },
      {
        type: 'module2',
        name: 'field2',
        validation: {
          isDefined: 'is defined',
          rule42: 'should be 42',
        },
      },
    ],
  };

  const isDefined = input => typeof input !== 'undefined';
  const notZero = input => input !== 0;
  const rule42 = input => input === 42;

  const controls = {
    module1: {
      module: {
        type: 'module1',
        validation: {
          isDefined,
          notZero,
        },
      },
    },
    module2: {
      module: {
        type: 'module2',
        validation: {
          isDefined,
          notZero,
          rule42,
        },
      },
    },
  };

  const rules = formValidationRules(form.modules, controls);

  describe('formValidationRules()', () => {
    it('should create validation rules object', () => {
      const { field1, field2 } = rules;

      expect(Array.isArray(field1)).toBeTruthy();
      expect(Array.isArray(field2)).toBeTruthy();

      expect(field1[0][0]).toEqual(isDefined);
      expect(field1[0][1]).toEqual('is defined');
      expect(field1[1][0]).toEqual(notZero);
      expect(field1[1][1]).toEqual('not zero');
    });
  });

  describe('validateForm()', () => {
    it('should validate input with rules', () => {
      const result = validateForm(
        {
          field1: 0,
          field2: 42,
        },
        rules
      );
      expect(result).toEqual({ field1: 'not zero' });
      const result2 = validateForm(
        {
          field1: 10,
          field2: 42,
        },
        rules
      );
      expect(result2).toEqual(null);
    });
  });
});
