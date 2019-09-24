import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Dropdown as UIDropdown, VarsPlaceholder } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Dropdown.module.styl';

export default function Dropdown({
  options,
  name,
  label,
  value,
  onChange,
  isModulePreview,
}) {
  const change = useCallback(
    v => {
      onChange(name, v);
    },
    [name, onChange]
  );

  return (
    <div className={styles.container}>
      <UIDropdown
        value={value}
        label={label}
        options={options}
        onChange={change}
      />
      <VarsPlaceholder
        vval={label}
        pos="left"
        vcn={styles.placeholder}
        isModulePreview={isModulePreview}
      />
    </div>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isModulePreview: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  label: '',
  value: '',
  isModulePreview: false,
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
    },
    defaults: {
      label: 'Select value',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
  },
};
