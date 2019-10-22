import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import AudioPlayer from '../../components/AudioPlayer';

import styles from './Audio.module.styl';
import { useExecutionContext } from '../../form/components/ExecutionContext';

export default function Audio({ src, loop, autoPlay, name }) {
  const { onModuleError } = useExecutionContext();
  const [playing, setPlaying] = useState(autoPlay);

  const handleError = useCallback(() => {
    onModuleError(`${name}: Error while loading audio ${src}`);
  }, [name, onModuleError, src]);

  return (
    <div className={styles.container}>
      <AudioPlayer
        loop={loop}
        audio={src}
        playing={playing}
        onTogglePlay={setPlaying}
        onError={handleError}
      />
    </div>
  );
}

Audio.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
};

Audio.defaultProps = {
  autoPlay: false,
  loop: false,
};

Audio.module = {
  type: 'audio',
  name: 'Audio',
  report: ['auido is not loading'],
  editor: {
    category: ModuleCategories.Media,
    properties: {
      src: {
        type: PropControlTypes.string,
        placeholder: 'Audio src',
        required: true,
      },
      loop: {
        type: PropControlTypes.boolean,
        label: 'Loop',
      },
      autoPlay: {
        type: PropControlTypes.boolean,
        label: 'Autoplay',
      },
    },
    defaults: {
      loop: false,
      autoPlay: false,
      src:
        'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
    },
  },
};
