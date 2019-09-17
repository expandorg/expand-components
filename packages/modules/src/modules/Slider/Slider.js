import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';
import { Slider as UISlider } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Slider.module.styl';

export default function Slider({ value, min, max, step, name, onChange }) {
  const change = useCallback(
    val => {
      onChange(name, val);
    },
    [name, onChange]
  );
  return (
    <div className={styles.contianer}>
      <UISlider
        className={styles.slider}
        value={+value}
        step={+step}
        min={+min}
        max={+max}
        onChange={change}
      />
      <div className={styles.value}>{value}</div>
    </div>
  );
}

Slider.module = {
  type: 'slider',
  name: 'Slider',
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
  },
  editor: {
    category: ModuleCategories.Input,
    properties: {
      step: {
        type: PropControlTypes.number,
        placeholder: 'Step size (default 1)',
        required: true,
      },
      min: {
        type: PropControlTypes.number,
        placeholder: 'Min value  (default 0)',
      },
      max: {
        type: PropControlTypes.number,
        placeholder: 'Max value (default 100)',
      },
      initial: {
        type: PropControlTypes.string,
        placeholder: 'Default value',
      },
    },
    defaults: {
      min: 0,
      max: 10,
      step: 1,
      initial: 0,
    },
  },
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  value: 0,
  min: 0,
  max: 10,
  step: 1,
};
