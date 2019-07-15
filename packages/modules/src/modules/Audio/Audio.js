import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import AudioPlayer from '../../components/AudioPlayer';

import styles from './Audio.module.styl';

export default class Audio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    loop: PropTypes.bool,
    autoPlay: PropTypes.bool,
    isModulePreview: PropTypes.bool,
    onModuleError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    autoPlay: false,
    loop: false,
    isModulePreview: false,
  };

  static module = {
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

  constructor(props) {
    super(props);
    this.state = {
      playing: props.autoPlay,
    };
  }

  handleTogglePlay = playing => {
    this.setState({ playing });
  };

  handleError = () => {
    const { onModuleError, name, src } = this.props;
    onModuleError(`${name}: Error while loading audio ${src}`);
  };

  render() {
    const { src, loop, isModulePreview } = this.props;

    const { playing } = this.state;

    return (
      <div className={styles.container}>
        <AudioPlayer
          isModulePreview={isModulePreview}
          loop={loop}
          audio={src}
          playing={playing}
          onTogglePlay={this.handleTogglePlay}
          onError={this.handleError}
        />
      </div>
    );
  }
}
