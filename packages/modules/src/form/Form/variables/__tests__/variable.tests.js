import getVariablesMap from '../getVariablesMap';
import applyVariables from '../applyVariables';

describe('form variables', () => {
  describe('getVariablesMap()', () => {
    it('should return map: key => value', () => {
      const vars = {
        foo: 1,
        foo2: 'bar',
      };

      const result = getVariablesMap(vars);
      expect(result).toBeInstanceOf(Map);

      expect(result.size).toEqual(2);
      expect(result.get('foo')).toEqual(1);
      expect(result.get('foo2')).toEqual('bar');
    });

    it('should apply key transformation', () => {
      const vars = {
        foo: 1,
        foo2: 'bar',
      };

      const result = getVariablesMap(vars, k => `$(${k})`);
      expect(result).toBeInstanceOf(Map);

      expect(result.size).toEqual(2);
      expect(result.get('$(foo)')).toEqual(1);
      expect(result.get('$(foo2)')).toEqual('bar');
    });
  });

  describe('applyVariables()', () => {
    it('should replace vars in simple module', () => {
      const module = {
        name: 'paragraph',
        type: 'paragraph',
        content: '$(foo)',
        content2: '$(bar)',
      };
      const vars = {
        foo: 'bar',
        bar: '',
      };
      const result = applyVariables(module, vars);
      expect(result).toEqual({
        name: 'paragraph',
        type: 'paragraph',
        content: 'bar',
        content2: '',
      });
    });

    it('should replace vars within text content', () => {
      const module = {
        name: 'paragraph',
        type: 'paragraph',
        test: '$(baz)',
        content: '$(foo) bar',
        content2: '$(foo) $(bar) + $(bar1)',
      };
      const vars = {
        foo: 'bar',
        baz: 1,
        bar: '',
        bar1: '',
      };
      const result = applyVariables(module, vars);
      expect(result).toEqual({
        name: 'paragraph',
        type: 'paragraph',
        test: 1,
        content: 'bar bar',
        content2: 'bar  + ',
      });
    });

    it('should replace vars in simple netsted modules', () => {
      const module = {
        name: 'dialog',
        type: 'dialog',
        modules: [
          {
            name: 'paragraph',
            type: 'paragraph',
            content: '$(foo)',
          },
          {
            name: 'paragraph',
            type: 'paragraph',
            content: '$(foo2)',
          },
        ],
      };
      const vars = {
        foo: 'bar',
        foo2: 'bar2',
      };
      const result = applyVariables(module, vars);
      expect(result).toEqual({
        name: 'dialog',
        type: 'dialog',
        modules: [
          {
            name: 'paragraph',
            type: 'paragraph',
            content: 'bar',
          },
          {
            name: 'paragraph',
            type: 'paragraph',
            content: 'bar2',
          },
        ],
      });
    });

    it('should not replace vars witout $()', () => {
      const module = {
        name: 'paragraph',
        type: 'paragraph',
        content: 'foo',
      };
      const vars = {
        foo: 'bar',
      };
      const result = applyVariables(module, vars);
      expect(result).toEqual({
        name: 'paragraph',
        type: 'paragraph',
        content: 'foo',
      });
    });
  });
});
