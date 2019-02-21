import {
  calculateCondition,
  interpretExpression,
  tokenize,
} from '../calculateCondition';

describe('EvaluateCondition', () => {
  describe('tokenize()', () => {
    it('should return simple values', () => {
      expect(tokenize('a')).toEqual([['a']]);
      expect(tokenize('a + b')).toEqual([['a + b']]);
      expect(tokenize('$(a)')).toEqual([['$(a)']]);
    });

    it('should keep blanks', () => {
      expect(tokenize('&& $(b)')).toEqual([['', '$(b)']]);
      expect(tokenize('$(b) ||     ')).toEqual([['$(b)'], ['']]);
    });

    it('should tokenize operators', () => {
      expect(tokenize('$(a) || $(b)')).toEqual([['$(a)'], ['$(b)']]);
      expect(tokenize('$(a) && $(b)')).toEqual([['$(a)', '$(b)']]);

      expect(tokenize('$(b) ||  abc   ')).toEqual([['$(b)'], ['abc']]);

      expect(tokenize('$(a)&&$(b)||$(c)')).toEqual([
        ['$(a)', '$(b)'],
        ['$(c)'],
      ]);
      expect(tokenize('$(a) || $(b) && $(c)')).toEqual([
        ['$(a)'],
        ['$(b)', '$(c)'],
      ]);
    });
  });

  describe('interpretExpression', () => {
    it('sholud interpret simple expressions', () => {
      const empty = new Map();

      expect(interpretExpression([], empty)).toEqual(false);
      expect(interpretExpression([['']], empty)).toEqual(false);
      expect(interpretExpression([[''], []], empty)).toEqual(false);
      expect(interpretExpression([[], ['', '']], empty)).toEqual(false);
      expect(interpretExpression([[''], ['']], empty)).toEqual(false);
    });

    it('sholud interpret simple value expressions', () => {
      const empty = new Map();

      expect(interpretExpression([[''], ['a']], empty)).toEqual(true);
      expect(interpretExpression([[''], ['false']], empty)).toEqual(false);
      expect(interpretExpression([['0', '   '], ['false']], empty)).toEqual(
        false
      );
      expect(interpretExpression([['a', ''], ['false']], empty)).toEqual(false);

      expect(interpretExpression([['a', 'false'], ['true']], empty)).toEqual(
        true
      );
    });

    it('sholud interpret  expressions with vars', () => {
      const vars = new Map([
        ['$(foo)', 'true'],
        ['$(bar)', 'false'],
        ['$(baz)', ''],
      ]);

      expect(interpretExpression([['$(foo)']], vars)).toEqual(true);
      expect(interpretExpression([['$(foo)', '$(bar)']], vars)).toEqual(false);

      expect(interpretExpression([['$(bar)', '$(bar)']], vars)).toEqual(false);
      expect(interpretExpression([['$(foo)', '$(foo)']], vars)).toEqual(true);

      expect(
        interpretExpression([['$(foo)', '$(bar)'], ['$(foo)']], vars)
      ).toEqual(true);

      expect(
        interpretExpression([['$(foo)', '$(bar)'], ['$(baz)']], vars)
      ).toEqual(false);

      expect(
        interpretExpression([['$(foo)', '$(bar)'], ['$(bar2)']], vars)
      ).toEqual(true);
    });
  });

  describe('calculateCondition()', () => {
    it('should calculate nulls as false', () => {
      expect(calculateCondition(null)).toEqual(false);
      expect(calculateCondition(undefined)).toEqual(false);
    });

    it('should calculate booleans', () => {
      expect(calculateCondition(true)).toEqual(true);
      expect(calculateCondition(false)).toEqual(false);
    });

    it('should calculate numbers', () => {
      expect(calculateCondition(0)).toEqual(false);
      expect(calculateCondition(10)).toEqual(true);
    });

    it('should calculate empty strings 0 and false as false', () => {
      expect(calculateCondition('')).toEqual(false);
      expect(calculateCondition('false')).toEqual(false);
      expect(calculateCondition('False')).toEqual(false);
      expect(calculateCondition(' False ')).toEqual(false);
      expect(calculateCondition('   ')).toEqual(false);
      expect(calculateCondition('0')).toEqual(false);
    });

    it('should calculate non-false string without operators as true', () => {
      expect(calculateCondition('true')).toEqual(true);
      expect(calculateCondition('true')).toEqual(true);
    });

    it('should calculate conditions with variables', () => {
      const vars = {
        foo: 'foo',
        bar: 'false',
        baz: '',
      };
      expect(calculateCondition('$(foo) && $(foo)', vars)).toEqual(true);
      expect(calculateCondition('$(foo) && $(bar)', vars)).toEqual(false);

      expect(calculateCondition('$(bar) && $(bar)', vars)).toEqual(false);

      expect(calculateCondition('$(foo) || $(bar) && $(baz)', vars)).toEqual(
        true
      );

      expect(calculateCondition('$(bar) || $(bar) && $(baz)', vars)).toEqual(
        false
      );
      expect(calculateCondition('$(bar) && $(bar) || $(baz)', vars)).toEqual(
        false
      );
    });

    it('should calculate conditions with !', () => {
      const vars = {
        foo: 'foo',
        bar: 'false',
        baz: '',
      };

      expect(calculateCondition('!$(foo)', vars)).toEqual(false);
      expect(calculateCondition('! $(bar)', vars)).toEqual(true);
      expect(calculateCondition('true && !false', vars)).toEqual(true);
      expect(calculateCondition('!true && !false')).toEqual(false);

      expect(calculateCondition('$(bar) && $(bar) || !$(baz)', vars)).toEqual(
        true
      );
    });
  });
});
