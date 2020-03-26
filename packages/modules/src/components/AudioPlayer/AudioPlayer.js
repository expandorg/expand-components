import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import MediaPlayer from '../MediaPlayer';
import PlayButton from '../PlayButton';

import Timeline from './Timeline';
import Volume from '../Volume';

import styles from './AudioPlayer.module.styl';

export default class AudioPlayer extends Component {
  static propTypes = {
    audio: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loop: PropTypes.bool,
    playing: PropTypes.bool,
    onTogglePlay: PropTypes.func.isRequired,
    onReady: PropTypes.func,
    onError: PropTypes.func,
  };

  static defaultProps = {
    loop: true,
    disabled: false,
    playing: false,
    onReady: Function.prototype,
    onError: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.player = createRef();

    this.state = {
      duration: 0,
      seek: 0,
      volume: 1,
    };
  }

  handleAudioReady = (duration) => {
    const { onReady } = this.props;
    this.setState({ duration });
    onReady(duration);
  };

  handleAudioProgress = (seek) => {
    this.setState({ seek });
  };

  handleCursorClick = (seek) => {
    if (this.player.current) {
      this.player.current.seekTo(seek);
    }
  };

  handleChangeVolume = (volume) => {
    this.setState({ volume });
  };

  render() {
    const {
      audio,
      playing,
      loop,
      onTogglePlay,
      onError,
      disabled,
    } = this.props;

    const { duration, seek, volume } = this.state;

    return (
      <div className={styles.content}>
        <div className={styles.player}>
          {!disabled && (
            <MediaPlayer
              disabled={disabled}
              src={audio}
              loop={loop}
              onError={onError}
              ref={this.player}
              volume={volume}
              playing={playing}
              onTogglePlay={onTogglePlay}
              onMediaReady={this.handleAudioReady}
              onMediaProgress={this.handleAudioProgress}
            />
          )}
        </div>
        <div className={styles.timeline}>
          <div className={styles.actions}>
            <PlayButton
              disabled={!duration}
              playing={playing}
              tooltip={playing ? 'Pause' : 'Play'}
              onToggle={onTogglePlay}
            />
            <Volume volume={volume} onChange={this.handleChangeVolume} />
          </div>
          <div className={styles.timelineContainer}>
            <Timeline
              duration={duration}
              seek={seek}
              onCursorClick={this.handleCursorClick}
            />
            <VarsPlaceholder vval={audio} />
          </div>
        </div>
      </div>
    );
  }
}
