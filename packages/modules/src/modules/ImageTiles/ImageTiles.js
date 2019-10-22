import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';
import { ImageTiles as UIImageTiles } from '../../components/ImageTiles';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './ImageTiles.module.styl';

export default class ImageTiles extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number),
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    columns: PropTypes.number,
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    columns: 4,
    rows: 4,
    value: [],
  };

  static module = {
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
      },
      defaults: {
        columns: 4,
        rows: 4,
        image: 'https://portal.expand.org/images/complete-tasks.png',
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, image, columns, rows } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.region}>
          <UIImageTiles
            src={image}
            columns={columns}
            rows={rows}
            selection={value}
            onChange={this.handleChange}
          />
          <VarsPlaceholder vval={image} />
        </div>
      </div>
    );
  }
}
