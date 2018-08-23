import makeVariables from '../makeVariables';
import applyVariables from '../applyVariables';

describe('form variables', () => {
  describe('makeVariables()', () => {
    it('should return map: $(key) => value', () => {
      const vars = {
        foo: 1,
        foo2: 'bar',
      };

      const result = makeVariables(vars);
      expect(result).toBeInstanceOf(Map);

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
      };
      const vars = makeVariables({
        foo: 'bar',
      });
      const result = applyVariables(module, vars);
      expect(result).toEqual({
        name: 'paragraph',
        type: 'paragraph',
        content: 'bar',
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
      const vars = makeVariables({
        foo: 'bar',
        foo2: 'bar2',
      });
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
  });
});
