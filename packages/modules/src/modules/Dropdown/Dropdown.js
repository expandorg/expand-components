import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Dropdown as UIDropdown } from '@expandorg/components';
import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Dropdown.module.styl';

export default function Dropdown({
  name,
  readOnly,
  initial,
  options,
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
    <div className={styles.container}>
      <UIDropdown
        value={val}
        label={label}
        options={options}
        onChange={change}
      />
      <VarsPlaceholder vval={label} pos="left" vcn={styles.placeholder} />
    </div>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: '',
  readOnly: false,
  initial: '',
  label: '',
};

Dropdown.module = {
  type: 'dropdown',
  name: 'Dropdown',
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
  },
  editor: {
    category: ModuleCategories.Input,
    properties: {
      label: {
        type: PropControlTypes.string,
        placeholder: 'Dropdown label',
        required: true,
      },
      options: {
        type: PropControlTypes.options,
      },
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
      initial: {
        type: PropControlTypes.string,
        placeholder: 'Initial value',
      },
    },
    defaults: {
      label: 'Select value',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
  },
};
