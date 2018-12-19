import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignleTagVideo from './components/SignleTagVideo';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

export default class TagVideo extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    readOnly: PropTypes.bool,
    hideControls: PropTypes.bool,
    initial: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    playbackRate: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    initial: null,
    hideControls: false,
    readOnly: false,
    playbackRate: 1,
    options: [],
    startTime: undefined,
  };

  static module = {
    type: 'tagVideo',
    name: 'Video Tagging',
    isInput: true,
    validation: {
      isRequired: value => {
        if (!value) {
          return false;
        }
        if (!value.tag) {
          return false;
        }
        return true;
      },
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

  handleChange = tag => {
    const { name, onChange } = this.props;
    onChange(name, tag);
  };

  render() {
    const {
      src,
      value,
      options,
      initial,
      readOnly,
      startTime,
      playbackRate,
      hideControls,
    } = this.props;
    const tag = readOnly ? initial : value;

    return (
      <SignleTagVideo
        key={src}
        hideControls={hideControls}
        startTime={typeof startTime === 'string' ? +startTime : startTime}
        playbackRate={playbackRate}
        video={src}
        readOnly={readOnly}
        tag={tag}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}
