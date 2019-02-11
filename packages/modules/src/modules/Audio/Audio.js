import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import AudioPlayer from '../../components/AudioPlayer';

import styles from './Audio.module.styl';

export default class Audio extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    loop: PropTypes.bool,
    // autoPlay: PropTypes.bool,
    // onModuleError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    // autoPlay: false,
    loop: false,
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
      },
      defaults: {
        loop: false,
        // autoPlay: false,
        src:
          'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
      },
    },
  };

  state = {
    playing: true,
  };

  handleTogglePlay = playing => {
    this.setState({ playing });
  };

  render() {
    const { src, loop } = this.props;

    const { playing } = this.state;

    return (
      <div className={styles.container}>
        <AudioPlayer
          loop={loop}
          audio={src}
          playing={playing}
          onTogglePlay={this.handleTogglePlay}
        />
      </div>
    );
  }
}
