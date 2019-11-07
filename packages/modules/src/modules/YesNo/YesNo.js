import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Select, Choice } from '../../components/Select';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import { formatter, IdType } from '../../components/Select/ids';

import styles from './YesNo.module.styl';

export default function YesNo({
  value,
  name,
  readOnly,
  initial,
  idType,
  noCaption,
  yesCaption,
  onChange,
}) {
  const options = useMemo(
    () => [
      { value: '1', caption: yesCaption },
      { value: '0', caption: noCaption },
    ],
    [noCaption, yesCaption]
  );

  const change = useCallback(
    v => {
      if (!readOnly) {
        onChange(name, v);
      }
    },
    [name, onChange, readOnly]
  );

  const val = readOnly ? initial : value;

  return (
    <div className={styles.module}>
      <Select options={options} onSelect={change} columns={2} idType={idType}>
        {({ onSelect, option }) => (
          <Choice
            key={option.value}
            option={option}
            selected={val === option.value}
            readOnly={readOnly}
            onSelect={onSelect}
          />
        )}
      </Select>
    </div>
  );
}

YesNo.propTypes = {
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  initial: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
  idType: PropTypes.oneOf([
    IdType.none,
    IdType.small,
    IdType.capital,
    IdType.roman,
    IdType.numerals,
  ]),
  yesCaption: PropTypes.string.isRequired,
  noCaption: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

YesNo.defaultProps = {
  value: null,
  readOnly: false,
  initial: null,
  idType: IdType.small,
};

YesNo.module = {
  type: 'yesno',
  name: 'Yes No',
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
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
      yesCaption: {
        type: PropControlTypes.string,
        placeholder: 'Positive answer',
        required: true,
      },
      noCaption: {
        type: PropControlTypes.string,
        placeholder: 'Negative answer',
        required: true,
      },
      idType: {
        type: PropControlTypes.enum,
        label: 'Enumerator type',
        options: ['none', 'numerals', 'small', 'capital', 'roman'],
        formatter,
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
      idType: IdType.small,
      yesCaption: 'Yes',
      noCaption: 'No',
    },
  },
};
