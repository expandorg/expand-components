import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { VarsPlaceholder } from '@expandorg/components';

import { ImageRegionSelect } from '../../components/RegionSelect';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './styles.module.styl';

export default class RegionSelect extends Component {
  static propTypes = {
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
    isModulePreview: PropTypes.bool,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    readOnly: false,
    isModulePreview: false,
    initial: null,
  };

  static module = {
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
        initial: {
          type: PropControlTypes.imageRegion,
          title: 'Initial value',
        },
        readOnly: {
          type: PropControlTypes.boolean,
          label: 'Read only',
        },
      },
      defaults: {
        image: 'https://portal.expand.org/images/complete-tasks.png',
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { image, readOnly, initial, value, isModulePreview } = this.props;
    const rect = readOnly ? initial : value;
    return (
      <div className={styles.container}>
        <ImageRegionSelect
          className={styles.region}
          isModulePreview={isModulePreview}
          src={image}
          value={rect}
          readOnly={readOnly}
          displayToggle={readOnly}
          onChange={this.handleChange}
        />
        <VarsPlaceholder
          vval={initial}
          isModulePreview={isModulePreview}
          pos="center"
        />
      </div>
    );
  }
}
