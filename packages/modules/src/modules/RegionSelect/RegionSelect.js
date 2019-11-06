import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';
import { ImageRegionSelect } from '../../components/RegionSelect';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './styles.module.styl';

export default function RegionSelect({
  name,
  onChange,
  image,
  readOnly,
  initial,
  value,
}) {
  const change = useCallback(
    v => {
      if (!readOnly) {
        onChange(name, v);
      }
    },
    [name, onChange, readOnly]
  );

  const rect = readOnly ? initial : value;

  return (
    <div className={styles.container}>
      <ImageRegionSelect
        className={styles.region}
        src={image}
        value={rect}
        readOnly={readOnly}
        displayToggle={readOnly}
        onChange={change}
      />
      <VarsPlaceholder vval={rect} pos="center" />
    </div>
  );
}

RegionSelect.propTypes = {
  value: PropTypes.shape({
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number,
  }),
  readOnly: PropTypes.bool,
  initial: PropTypes.shape({
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number,
  }),
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

RegionSelect.defaultProps = {
  value: null,
  readOnly: false,
  initial: null,
};

RegionSelect.module = {
  type: 'regionSelect',
  name: 'Image Region Select',
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
  },
  report: ['Image is not loading'],
  editor: {
    category: ModuleCategories.Image,
    properties: {
      image: {
        type: PropControlTypes.string,
        placeholder: 'Image Url',
        required: true,
      },
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
      initial: {
        type: PropControlTypes.imageRegion,
        title: 'Initial value',
      },
    },
    defaults: {
      image: 'https://portal.expand.org/images/complete-tasks.png',
    },
  },
};
