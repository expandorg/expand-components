import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

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
    readOnly: PropTypes.bool,
    hideControls: PropTypes.bool,
    playbackRate: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: [],
    options: [],
    readOnly: false,
    hideControls: false,
    playbackRate: 1,
    startTime: undefined,
  };

  static module = {
    type: 'multipleTagVideo',
    name: 'Video Tagging (multiple)',
    isInput: true,
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
        readOnly: {
          type: PropControlTypes.boolean,
          label: 'Read only',
        },
        hideControls: {
          type: PropControlTypes.boolean,
          label: 'Hide controls',
        },
        playbackRate: {
          type: PropControlTypes.number,
          placeholder: 'playback rate',
        },
        startTime: {
          type: PropControlTypes.number,
          placeholder: 'Start playback from',
        },
      },
      defaults: {
        playbackRate: 1,
        src: 'https://www.youtube.com/watch?v=PXi3Mv6KMzY',
      },
    },
  };

  handleChange = tags => {
    const { name, onChange } = this.props;
    onChange(name, tags);
  };

  render() {
    const {
      src,
      value,
      startTime,
      options,
      playbackRate,
      readOnly,
      hideControls,
    } = this.props;

    return (
      <UIMultipleTagVideo
        key={src}
        playbackRate={playbackRate}
        options={options}
        readOnly={readOnly}
        hideControls={hideControls}
        startTime={typeof startTime === 'string' ? +startTime : startTime}
        video={src}
        tags={value}
        onChange={this.handleChange}
      />
    );
  }
}
