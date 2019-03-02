import { compile, translate, parseToken, ops } from '../compiler';

describe('compiler', () => {
  describe('parseToken()', () => {
    it('parse numbers', () => {
      expect(parseToken('10')).toEqual({
        type: 'value',
        value: 10,
      });
      expect(parseToken('-10 ')).toEqual({
        type: 'value',
        value: -10,
      });

      expect(parseToken('0 ')).toEqual({
        type: 'value',
        value: 0,
      });
    });

    it('parse variables', () => {
      expect(parseToken('$(test)')).toEqual({
        type: 'variable',
        value: 'test',
      });
      expect(parseToken('$(test-123)')).toEqual({
        type: 'variable',
        value: 'test-123',
      });
    });

    it('parse ops', () => {
      ops.forEach(op => {
        expect(parseToken(op)).toEqual({
          type: 'op',
          value: op,
        });
      });
    });
    it('parse booleans', () => {
      expect(parseToken('True')).toEqual({
        type: 'value',
        value: true,
      });

      expect(parseToken('true')).toEqual({
        type: 'value',
        value: true,
      });

      expect(parseToken('false')).toEqual({
        type: 'value',
        value: false,
      });
    });
    it('parse strings', () => {
      expect(parseToken('haha')).toEqual({
        type: 'value',
        value: '"haha"',
      });

      expect(parseToken("check it out i'm string")).toEqual({
        type: 'value',
        value: '"check it out i\'m string"',
      });
    });
  });

  describe('translate()', () => {
    it('should translate simple program', () => {
      expect(translate(['2', '+', '2'])).toEqual({
        js: '2 + 2',
        variables: {},
      });
      expect(translate(['2', '===', '2'])).toEqual({
        js: '2 === 2',
        variables: {},
      });
    });

    it('should translate sub-expressions', () => {
      expect(translate(['2', '+', 'true', '*', ['3', '+', '3']])).toEqual({
        js: '2 + true * (3 + 3)',
        variables: {},
      });

      expect(
        translate(['adsad adasd', '+', 'true', '*', ['3', '+', '3']])
      ).toEqual({
        js: '"adsad adasd" + true * (3 + 3)',
        variables: {},
      });
    });

    it('should find variables', () => {
      expect(translate(['2', '+', '$(a)'])).toEqual({
        js: '2 + vars["a"]',
        variables: { a: 0 },
      });
      expect(translate(['$(b)', '===', '$(c)'])).toEqual({
        js: 'vars["b"] === vars["c"]',
        variables: { b: 0, c: 0 },
      });
      expect(translate(['$(d)', '===', 'true'])).toEqual({
        js: 'vars["d"] === true',
        variables: { d: 0 },
      });
    });
  });

  describe('compile()', () => {
    it('should comile simple', () => {
      expect(compile(['2', '+', '2'])()).toEqual(4);
      expect(compile(['2', '==', '2'])()).toEqual(true);
      expect(compile(['asd', '==', 'asd'])()).toEqual(true);
      expect(compile(['bcd', '!=', 'asd'])()).toEqual(true);
    });

    it('should comile subexr', () => {
      expect(compile([['2', '+', '2'], '*', ['2', '+', '2']])()).toEqual(16);
      expect(compile([['2', '+', '2'], '>', ['2', '-', '2']])()).toEqual(true);
      expect(compile([['2', '===', '2'], '&&', ['3', '>', '2']])()).toEqual(
        true
      );
      expect(compile([['3', '===', '2'], '||', ['3', '>', '2']])()).toEqual(
        true
      );
    });
    it('should comile exr with vars', () => {
      expect(compile(['2', '+', '$(a)'])({ a: 2 })).toEqual(4);
      expect(compile(['2', '+', '$(a)'])({ a: 6 })).toEqual(8);
      expect(compile(['2', '+', '$(a)'])({ a: 'asdasd' })).toEqual('2asdasd');
    });
    it('should use 0 as default value for vars', () => {
      expect(compile(['2', '+', '$(a)'])()).toEqual(2);
      expect(compile(['false', '==', '$(a)'])()).toEqual(true);
    });
  });
});
