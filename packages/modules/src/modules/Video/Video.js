import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import { VideoPlayer } from '../../components/VideoPlayer';

import styles from './Video.module.styl';

export default class Video extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    loop: PropTypes.bool,
    autoPlay: PropTypes.bool,
    // muted: PropTypes.bool,
    src: PropTypes.string.isRequired,
    isModulePreview: PropTypes.bool,
    onModuleError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loop: false,
    isModulePreview: false,
    autoPlay: false,
    // muted: false,
  };

  static module = {
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

  player = createRef();

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
    onModuleError(`${name}: Error while loading video ${src}`);
  };

  handleSeek = seek => {
    if (this.player.current) {
      this.player.current.seekTo(seek);
    }
  };

  render() {
    const { src, loop, isModulePreview } = this.props;
    const { playing } = this.state;

    return (
      <div className={styles.container}>
        <VideoPlayer
          ref={this.player}
          isModulePreview={isModulePreview}
          video={src}
          loop={loop}
          playing={playing}
          volumeControl
          onTogglePlay={this.handleTogglePlay}
          onCursorClick={this.handleSeek}
          onError={this.handleError}
        />
      </div>
    );
  }
}
