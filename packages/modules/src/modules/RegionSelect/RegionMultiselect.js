import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { ImageRegionMultiselect } from '../../components/RegionSelect';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './styles.module.styl';

const getInitialValue = initial => {
  if (!initial || !Array.isArray(initial)) {
    return [];
  }
  return initial;
};

export default class RegionMultiselect extends Component {
  static propTypes = {
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

  static defaultProps = {
    value: [],
    readOnly: false,
    initial: [],
  };

  static module = {
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
        initial: {
          type: PropControlTypes.imageRegion,
          title: 'Set initial values',
          multiple: true,
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
    const { image, value, readOnly, initial } = this.props;
    const values = readOnly ? getInitialValue(initial) : value;
    return (
      <ImageRegionMultiselect
        className={styles.region}
        src={image}
        displayToggle={readOnly}
        readOnly={readOnly}
        values={values}
        onChange={this.handleChange}
      />
    );
  }
}
