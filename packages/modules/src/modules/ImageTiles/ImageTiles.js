import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';
import { ImageTiles as UIImageTiles } from '../../components/ImageTiles';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './ImageTiles.module.styl';

export default function ImageTiles({
  name,
  value,
  readOnly,
  initial,
  image,
  columns,
  rows,
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
      <div className={styles.region}>
        <UIImageTiles
          src={image}
          columns={columns}
          rows={rows}
          selection={val}
          onChange={change}
        />
        <VarsPlaceholder vval={image} />
      </div>
    </div>
  );
}

ImageTiles.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.number),
  readOnly: PropTypes.bool,
  initial: PropTypes.arrayOf(PropTypes.number),
  image: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

ImageTiles.defaultProps = {
  value: [],
  readOnly: false,
  initial: [],
  columns: 4,
  rows: 4,
};

ImageTiles.module = {
  type: 'imageTiles',
  name: 'Image Tiles',
  isInput: true,
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
      columns: {
        type: PropControlTypes.number,
        placeholder: 'Number of columns',
      },
      rows: {
        type: PropControlTypes.number,
        placeholder: 'Number of rows',
      },
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
    },
    defaults: {
      columns: 4,
      rows: 4,
      image: 'https://portal.expand.org/images/complete-tasks.png',
    },
  },
};
