import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@gemsorg/validation';

import UIMultipleTagVideo from './components/MultipleTagVideo';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

export default class MultipleTagVideo extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(
      PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        tag: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: [],
    options: [],
    startTime: undefined,
  };

  static module = {
    type: 'multipleTagVideo',
    name: 'Video Tagging (multiple)',
    validation: {
      isRequired: rules.isRequiredArray,
      isNotEmpty: rules.isRequiredArray,
    },
    report: ['video is not loading'],
    editor: {
      category: ModuleCategories.Video,
      properties: {
        src: {
          type: PropControlTypes.string,
          placeholder: 'Video url',
          required: true,
        },
        startTime: {
          type: PropControlTypes.number,
          placeholder: 'Start playback from',
        },
      },
      defaults: {
        src: 'https://www.youtube.com/watch?v=PXi3Mv6KMzY',
      },
    },
  };

  handleChange = tags => {
    const { name, onChange } = this.props;
    onChange(name, tags);
  };

  render() {
    const { src, value, startTime, options } = this.props;

    return (
      <UIMultipleTagVideo
        key={src}
        options={options}
        startTime={startTime}
        video={src}
        tags={value}
        onChange={this.handleChange}
      />
    );
  }
}
