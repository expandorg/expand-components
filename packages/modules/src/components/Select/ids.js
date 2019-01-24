// @flow

export const IdType = {
  small: 'small',
  capital: 'capital',
  roman: 'roman',
  numerals: 'numerals',
};

const i18n = {
  [IdType.capital]: 'Capital Letters',
  [IdType.small]: 'Small letters',
  [IdType.numerals]: 'Numerals',
  [IdType.roman]: 'Roman numerals',
};

export const formatter = (type: string) => i18n[type];

const romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

const convertToRoman = (num: number): string => {
  if (num !== 0) {
    for (let i = 0; i < romanMatrix.length; i += 1) {
      if (num >= romanMatrix[i][0]) {
        return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
      }
    }
  }
  return '';
};

export const getIdValue = (idx: number, type: string) => {
  switch (type) {
    case IdType.capital:
      return String.fromCharCode(65 + (idx % 26));
    case IdType.small:
      return String.fromCharCode(97 + (idx % 26));
    case IdType.numerals:
      return idx + 1;
    case IdType.roman:
      return convertToRoman(idx + 1);
    default:
      break;
  }
  return idx + 1;
};
