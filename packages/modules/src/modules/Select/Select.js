import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Select as UISelect, Choice } from '../../components/Select';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import { formatter, IdType } from '../../components/Select/ids';

import styles from './styles.module.styl';

export default function Select({
  value,
  name,
  readOnly,
  initial,
  options,
  columns,
  idType,
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

  const selected = readOnly ? initial : value;

  return (
    <div className={styles.module}>
      <UISelect
        options={options}
        onSelect={change}
        columns={columns}
        idType={idType}
      >
        {({ onSelect, option }) => (
          <Choice
            key={option.value}
            option={option}
            readOnly={readOnly}
            selected={selected === option.value}
            onSelect={onSelect}
          />
        )}
      </UISelect>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  idType: PropTypes.oneOf([
    IdType.none,
    IdType.small,
    IdType.capital,
    IdType.roman,
    IdType.numerals,
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columns: PropTypes.oneOf([1, 2, 3]),
  readOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  value: null,
  readOnly: false,
  initial: null,
  columns: 2,
  idType: IdType.small,
};

Select.module = {
  type: 'select',
  name: 'Select',
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
  },
  verificationScore: (value) => {
    const numeric = +value;
    if (Number.isNaN(numeric)) {
      return 0;
    }
    return Math.min(Math.max(numeric, 0), 1);
  },
  editor: {
    category: ModuleCategories.Input,
    properties: {
      columns: {
        type: PropControlTypes.enum,
        label: 'Columns number',
        options: [2, 3],
      },
      idType: {
        type: PropControlTypes.enum,
        label: 'Enumerator type',
        options: ['none', 'numerals', 'small', 'capital', 'roman'],
        formatter,
      },
      options: {
        type: PropControlTypes.options,
        placeholder: 'Options',
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
      columns: 2,
      idType: IdType.small,
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
  },
};
