import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Input as UIInput } from '@expandorg/components';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Input.module.styl';

export default function Input({
  name,
  value,
  readOnly,
  initial,
  placeholder,
  inputType,
  onChange,
}) {
  const change = useCallback(
    ({ target }) => {
      if (!readOnly) {
        onChange(name, target.value);
      }
    },
    [name, onChange, readOnly]
  );

  const val = readOnly ? initial : value;

  return (
    <div className={styles.container}>
      <UIInput
        type={inputType}
        className={styles.input}
        onChange={change}
        readOnly={readOnly}
        value={val}
        autoComplete="off"
        placeholder={placeholder}
      />
      <VarsPlaceholder
        vval={initial}
        className={styles.placeholder}
        pos="left"
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  initial: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: undefined,
  readOnly: false,
  initial: undefined,
  inputType: 'text',
  placeholder: '',
};

Input.module = {
  type: 'input',
  name: 'Input',
  report: ['Unable to fill field'],
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
    isEmail: rules.isEmail,
    isUrl: rules.isUrl,
    isNumber: rules.isNumber,
    isMinCharacterCount: rules.isMinCharacterCount,
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
      inputType: {
        type: PropControlTypes.enum,
        label: 'Input type',
        options: ['text', 'email', 'password', 'number', 'date'],
      },
      placeholder: {
        type: PropControlTypes.string,
        placeholder: 'Placeholder',
      },
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
      initial: {
        type: PropControlTypes.string,
        placeholder: 'Default value',
      },
    },
    defaults: {
      inputType: 'text',
      placeholder: 'some text...',
    },
  },
};
