import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { ImageRegionSelect } from '../../components/RegionSelect';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

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
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    readOnly: false,
    initial: null,
  };

  static module = {
    type: 'regionSelect',
    name: 'Image Region Select',
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
      isNotEmpty: rules.isNotEmpty,
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
    const { image, readOnly, initial, value } = this.props;
    const rect = readOnly ? initial : value;
    return (
      <ImageRegionSelect
        className={styles.region}
        src={image}
        value={rect}
        readOnly={readOnly}
        displayToggle={readOnly}
        onChange={this.handleChange}
      />
    );
  }
}
