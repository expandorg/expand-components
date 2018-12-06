// @flow

import { rules } from '@gemsorg/validation';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

const inputMeta: ModuleControlMeta = {
  report: ['Unable to fill field'],
  validation: {
    isRequired: rules.isRequired,
    isNotEmpty: rules.isNotEmpty,
    isEmail: rules.isEmail,
    isNumber: rules.isNumber,
  },
  verificationScore: value => {
    const numeric = +value;
    if (Number.isNaN(numeric)) {
      return 0;
    }
    return Math.min(Math.max(numeric, 0), 1);
  },
  editor: {
    category: ModuleCategories.Input,
    properties: {
      placeholder: {
        type: PropControlTypes.string,
        placeholder: 'Placeholder',
      },
      initial: {
        type: PropControlTypes.string,
        placeholder: 'Default value',
      },
      label: {
        type: PropControlTypes.string,
        placeholder: 'Label',
      },
    },
    defaults: {
      placeholder: 'some text...',
    },
  },
};

export default inputMeta;
