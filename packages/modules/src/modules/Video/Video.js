import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import { VideoPlayer } from '../../components/VideoPlayer';

import { useExecutionContext } from '../../form/components/ExecutionContext';

import styles from './Video.module.styl';

export default function Video({ src, name, loop, autoPlay }) {
  const player = useRef(null);
  const [playing, setPlaying] = useState(autoPlay);

  const { onModuleError } = useExecutionContext();

  const handleError = useCallback(() => {
    onModuleError(`${name}: Error while loading video ${src}`);
  }, [name, onModuleError, src]);

  const handleSeek = useCallback(seek => {
    if (player.current) {
      player.current.seekTo(seek);
    }
  }, []);

  return (
    <div className={styles.container}>
      <VideoPlayer
        ref={player}
        video={src}
        loop={loop}
        playing={playing}
        volumeControl
        onTogglePlay={setPlaying}
        onCursorClick={handleSeek}
        onError={handleError}
      />
    </div>
  );
}

Video.propTypes = {
  name: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  // muted: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

Video.defaultProps = {
  loop: false,
  autoPlay: false,
  // muted: false,
};

Video.module = {
  type: 'video',
  name: 'Video',
  report: ['video is not loading'],
  editor: {
    category: ModuleCategories.Media,
    properties: {
      src: {
        type: PropControlTypes.string,
        placeholder: 'Video src',
        required: true,
      },
      autoPlay: {
        type: PropControlTypes.boolean,
        label: 'play video automatically',
      },
      loop: {
        type: PropControlTypes.boolean,
        label: 'Loop video',
      },
      muted: {
        type: PropControlTypes.string,
        label: 'Muted',
      },
    },
    defaults: {
      src: 'http://media.gettyimages.com/videos/cap-video-id896606100',
    },
  },
};
