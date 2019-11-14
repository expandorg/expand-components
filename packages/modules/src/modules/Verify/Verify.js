import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Input } from '@expandorg/components/src/components/Input/Input';
import { Select, Choice } from '../../components/Select';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Verify.module.styl';

export default function Verify({
  value,
  name,
  noCaption,
  yesCaption,
  onChange,
}) {
  const score = value ? value.score : null;
  const reason = value ? value.reason : '';

  const options = useMemo(
    () => [
      { value: 1, caption: yesCaption },
      { value: 0, caption: noCaption },
    ],
    [noCaption, yesCaption]
  );

  const changeScore = useCallback(
    newScore => {
      const result = {
        score: newScore,
        reason: newScore === 0 ? reason : '',
      };
      onChange(name, result);
    },
    [name, onChange, reason]
  );

  const changeReason = useCallback(
    ({ target }) => {
      onChange(name, { score, reason: target.value });
    },
    [name, onChange, score]
  );

  return (
    <div className={styles.module}>
      <Select options={options} columns={2} onSelect={changeScore}>
        {({ onSelect, option }) => (
          <Choice
            key={option.value}
            option={option}
            selected={score === option.value}
            onSelect={onSelect}
          />
        )}
      </Select>
      {score === 0 && (
        <Input
          type="text"
          className={styles.input}
          value={reason}
          placeholder="Rejection reason"
          onChange={changeReason}
        />
      )}
    </div>
  );
}

Verify.propTypes = {
  name: PropTypes.string.isRequired,
  yesCaption: PropTypes.string.isRequired,
  noCaption: PropTypes.string.isRequired,
  value: PropTypes.shape({
    score: PropTypes.number,
    reason: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

Verify.defaultProps = {
  value: null,
};

Verify.module = {
  type: 'verify',
  name: 'Verify',
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
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
    },
    defaults: {
      yesCaption: 'Yes',
      noCaption: 'No',
    },
  },
};
