import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Video from './video/Video';
import PlayButton from './video/PlayButton';
import Timeline from './timeline/Timeline';

import styles from './VideoPlayer.module.styl';

export default class VideoPlayer extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired,

    start: PropTypes.number,
    stop: PropTypes.number,

    playing: PropTypes.bool,
    cursor: PropTypes.bool,

    limitFrom: PropTypes.number,
    limitTo: PropTypes.number,

    onTogglePlay: PropTypes.func.isRequired,
    onReady: PropTypes.func,
    onCursorClick: PropTypes.func,
  };

  static defaultProps = {
    start: null,
    stop: null,
    playing: true,
    cursor: true,
    limitFrom: undefined,
    limitTo: undefined,
    onReady: Function.prototype,
    onCursorClick: Function.prototype,
  };

  state = {
    duration: 0,
    seek: 0,
  };

  handleVideoReady = duration => {
    const { onReady } = this.props;
    this.setState({ duration });
    onReady(duration);
  };

  handleVideoProgress = seek => {
    this.setState({ seek });
  };

  render() {
    const {
      video,
      children,
      playing,
      limitFrom,
      limitTo,
      start,
      stop,
      onTogglePlay,
      onCursorClick,
      cursor,
    } = this.props;

    const { duration, seek } = this.state;

    return (
      <div className={styles.content}>
        <div className={styles.video}>
          <Video
            src={video}
            start={start || limitFrom}
            stop={stop}
            playing={playing}
            onVideoReady={this.handleVideoReady}
            onTogglePlay={onTogglePlay}
            onVideoProgress={this.handleVideoProgress}
          />
        </div>
        <div className={styles.timeline}>
          <div className={styles.play}>
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
            limitFrom={limitFrom}
            limitTo={limitTo}
            cursor={cursor}
            playing={playing}
            onCursorClick={onCursorClick}
          >
            {children}
          </Timeline>
        </div>
      </div>
    );
  }
}
