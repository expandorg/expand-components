import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import MediaPlayer from '../MediaPlayer';
import PlayButton from '../PlayButton';

import Timeline from './Timeline';

import styles from './AudioPlayer.module.styl';

export default class AudioPlayer extends Component {
  static propTypes = {
    audio: PropTypes.string.isRequired,
    loop: PropTypes.bool,
    playing: PropTypes.bool,
    onTogglePlay: PropTypes.func.isRequired,
    onReady: PropTypes.func,
  };

  static defaultProps = {
    loop: true,
    playing: false,
    onReady: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.player = createRef();

    this.state = {
      duration: 0,
      seek: 0,
    };
  }

  handleAudioReady = duration => {
    const { onReady } = this.props;
    this.setState({ duration });
    onReady(duration);
  };

  handleAudioProgress = seek => {
    this.setState({ seek });
  };

  handleCursorClick = seek => {
    if (this.player.current) {
      this.player.current.seekTo(seek);
    }
  };

  render() {
    const { audio, playing, loop, onTogglePlay } = this.props;

    const { duration, seek } = this.state;

    return (
      <div className={styles.content}>
        <div className={styles.player}>
          <MediaPlayer
            src={audio}
            loop={loop}
            ref={this.player}
            playing={playing}
            onTogglePlay={onTogglePlay}
            onMediaReady={this.handleAudioReady}
            onMediaProgress={this.handleAudioProgress}
          />
        </div>
        <div className={styles.timeline}>
          <div className={styles.actions}>
            <PlayButton
              disabled={!duration}
              playing={playing}
              tooltip={playing ? 'Pause' : 'Play'}
              onToggle={onTogglePlay}
            />
          </div>
          <Timeline
            duration={duration}
            seek={seek}
            onCursorClick={this.handleCursorClick}
          />
        </div>
      </div>
    );
  }
}
