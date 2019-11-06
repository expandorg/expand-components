import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import UIMultipleTagVideo from './components/MultipleTagVideo';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';
import { useExecutionContext } from '../../form/components/ExecutionContext';

export default function MultipleTagVideo({
  src,
  value,
  name,
  readOnly,
  initial,
  onChange,
  startTime,
  options,
  playbackRate,
  hideControls,
  autoPlay,
}) {
  const { onModuleError } = useExecutionContext();
  const change = useCallback(
    tags => {
      if (!readOnly) {
        onChange(name, tags);
      }
    },
    [name, onChange, readOnly]
  );

  const handleError = useCallback(() => {
    onModuleError(`${name}: Error while loading audio ${src}`);
  }, [name, onModuleError, src]);

  const tags = readOnly ? initial : value;

  return (
    <UIMultipleTagVideo
      key={src}
      autoPlay={autoPlay}
      playbackRate={playbackRate}
      options={options}
      readOnly={readOnly}
      hideControls={hideControls}
      startTime={typeof startTime === 'string' ? +startTime : startTime}
      video={src}
      tags={tags}
      onChange={change}
      onError={handleError}
    />
  );
}

MultipleTagVideo.propTypes = {
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
  initial: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    })
  ),
  hideControls: PropTypes.bool,
  playbackRate: PropTypes.number,
  autoPlay: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  startTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};

MultipleTagVideo.defaultProps = {
  value: [],
  options: [],
  readOnly: false,
  initial: [],
  autoPlay: false,
  hideControls: false,
  playbackRate: 1,
  startTime: undefined,
};

MultipleTagVideo.module = {
  type: 'multipleTagVideo',
  name: 'Video Tagging (multiple)',
  isInput: true,
  validation: {
    isRequired: rules.isRequiredArray,
  },
  report: ['video is not loading'],
  editor: {
    category: ModuleCategories.Media,
    properties: {
      src: {
        type: PropControlTypes.string,
        placeholder: 'Video url',
        required: true,
      },
      autoPlay: {
        type: PropControlTypes.boolean,
        label: 'play video automatically',
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
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
    },
    defaults: {
      playbackRate: 1,
      src: 'https://www.youtube.com/watch?v=PXi3Mv6KMzY',
    },
  },
};
