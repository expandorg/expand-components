import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';
import { Checkbox as UICheckbox } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Checkbox.module.styl';

export default function Checkbox({
  name,
  readOnly,
  initial,
  label,
  value,
  onChange,
}) {
  const change = useCallback(
    (v) => {
      if (!readOnly) {
        onChange(name, v);
      }
    },
    [name, onChange, readOnly]
  );

  const val = readOnly ? initial : value;

  return (
    <UICheckbox
      className={styles.checkbox}
      value={val}
      label={label}
      name={name}
      onChange={change}
    />
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  readOnly: PropTypes.bool,
  initial: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  value: undefined,
  readOnly: false,
  initial: undefined,
  label: '',
};

Checkbox.module = {
  type: 'checkbox',
  name: 'Checkbox',
  isInput: true,
  validation: {
    isTrue: rules.isTrue,
  },
  verificationScore: (value) => (value ? 1 : 0),
  editor: {
    category: ModuleCategories.Input,
    properties: {
      label: {
        type: PropControlTypes.string,
        placeholder: 'Checkbox label',
      },
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
      initial: {
        type: PropControlTypes.boolean,
        label: 'Initial value',
      },
    },
    defaults: {
      label: 'Checkbox label',
    },
  },
};
