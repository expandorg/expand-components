import { formatTime, parseTime } from '../timeStrings';

describe('clip helpers', () => {
  describe('formatTime()', () => {
    it('should format seconds ', () => {
      expect(formatTime(10)).toEqual('00:10.00');
    });

    it('should format fraction seconds ', () => {
      expect(formatTime(610.1)).toEqual('10:10.10');
      expect(formatTime(10.9)).toEqual('00:10.90');
    });

    it('should add hours ', () => {
      expect(formatTime(3610.9)).toEqual('01:00:10.90');
    });
  });

  describe('parseTime()', () => {
    it('should parse seconds ', () => {
      expect(parseTime('10')).toEqual(10);
      expect(parseTime('610')).toEqual(610);
      expect(parseTime('00:10')).toEqual(10);
    });

    it('should parse seconds with fraction part ', () => {
      expect(parseTime('00:10.10')).toEqual(10.1);
    });

    it('should parse minutes ', () => {
      expect(parseTime('05:10.10')).toEqual(310.1);
    });

    it('should parse seconds with fraction part ', () => {
      expect(parseTime('1:00:10.10')).toEqual(3610.1);
    });

    it('should ignore whitespaces ', () => {
      expect(parseTime('   00: 10  ')).toEqual(10);
    });
  });
});
