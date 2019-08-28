import getPages from '../getPages';

const display = 5;

describe('getPages()', () => {
  it('should return all pages from 0 to display', () => {
    expect(getPages(0, 5, display)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should limit number of pages', () => {
    expect(getPages(0, 15, display)).toEqual([0, 1, 2, 3, 4]);
    expect(getPages(0, 2, display)).toEqual([0, 1]);
  });

  describe('boundaries', () => {
    it('should start from 0 when close to 0', () => {
      expect(getPages(0, 15, display)).toEqual([0, 1, 2, 3, 4]);
      expect(getPages(1, 15, display)).toEqual([0, 1, 2, 3, 4]);
      expect(getPages(2, 15, display)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should keep selected page in the middle', () => {
      expect(getPages(3, 15, display)).toEqual([1, 2, 3, 4, 5]);
      expect(getPages(4, 15, display)).toEqual([2, 3, 4, 5, 6]);
    });

    it('should disaply last pages when close to end', () => {
      expect(getPages(13, 15, display)).toEqual([11, 12, 13, 14, 15]);
      expect(getPages(14, 15, display)).toEqual([11, 12, 13, 14, 15]);
      expect(getPages(15, 15, display)).toEqual([11, 12, 13, 14, 15]);
    });
  });
});
