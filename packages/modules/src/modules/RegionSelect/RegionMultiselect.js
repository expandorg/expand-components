import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';
import { ImageRegionMultiselect } from '../../components/RegionSelect';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './styles.module.styl';

const getValue = (initial) => {
  if (!initial || !Array.isArray(initial)) {
    return [];
  }
  return initial;
};

export default function RegionMultiselect({
  image,
  value,
  readOnly,
  initial,
  name,
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

  const values = getValue(readOnly ? initial : value);
  return (
    <div className={styles.container}>
      <ImageRegionMultiselect
        className={styles.region}
        src={image}
        displayToggle={readOnly}
        readOnly={readOnly}
        values={values}
        onChange={change}
      />
      <VarsPlaceholder vval={initial} pos="center" />
    </div>
  );
}

RegionMultiselect.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    })
  ),
  readOnly: PropTypes.bool,
  initial: PropTypes.arrayOf(
    PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    })
  ),
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

RegionMultiselect.defaultProps = {
  value: [],
  readOnly: false,
  initial: [],
};

RegionMultiselect.module = {
  type: 'regionMultiselect',
  name: 'Image Region Multiselect',
  isInput: true,
  report: ['Image is not loading'],
  validation: {
    isRequired: rules.isRequiredArray,
  },
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
        title: 'Initial values',
        multiple: true,
      },
    },
    defaults: {
      image: 'https://portal.expand.org/images/complete-tasks.png',
    },
  },
};
