import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Player from 'react-player';

export const intervalMs = 40;

export default class MediaPlayer extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    playing: PropTypes.bool.isRequired,

    start: PropTypes.number,
    stop: PropTypes.number,
    volume: PropTypes.number,

    loop: PropTypes.bool,

    playbackRate: PropTypes.number,

    onTogglePlay: PropTypes.func.isRequired,

    onMediaReady: PropTypes.func.isRequired,
    onMediaProgress: PropTypes.func.isRequired,
    onError: PropTypes.func,
  };

  static defaultProps = {
    loop: true,
    start: 0,
    stop: null,
    playbackRate: 1,
    volume: null,
    onError: Function.prototype,
  };

  state = {
    canPlay: false,
  };

  playerRef = createRef();

  componentDidUpdate({ start: prevStart, stop: prevStop }) {
    const { stop, start } = this.props;
    if (start !== prevStart || stop !== prevStop) {
      if (start !== prevStart && start !== null && start !== undefined) {
        this.playerRef.current.seekTo(start);
      } else if (stop !== prevStop && stop !== null && stop !== undefined) {
        this.playerRef.current.seekTo(stop);
      }
    }
  }

  seekTo = seek => {
    if (this.playerRef.current) {
      this.playerRef.current.seekTo(seek);
    }
  };

  handleReady = () => {
    const { start } = this.props;

    this.setState({ canPlay: true });
    if (start) {
      this.playerRef.current.seekTo(start);
    }
  };

  handleDuration = duration => {
    const { onMediaReady } = this.props;
    onMediaReady(duration);
  };

  handleProgress = ({ playedSeconds }) => {
    const { stop, start, onMediaProgress } = this.props;
    if (start !== null && stop !== null) {
      if (playedSeconds > stop) {
        this.playerRef.current.seekTo(start);
      }
    }
    onMediaProgress(playedSeconds);
  };

  handlePause = () => {
    const { onTogglePlay } = this.props;
    onTogglePlay(false);
  };

  handlePlay = () => {
    const { onTogglePlay } = this.props;
    onTogglePlay(true);
  };

  render() {
    const { src, playing, playbackRate, volume, loop, onError } = this.props;

    const { canPlay } = this.state;

    return (
      <Player
        ref={this.playerRef}
        url={src}
        loop={loop}
        playing={canPlay && playing}
        width="100%"
        playsinline
        playbackRate={playbackRate}
        progressInterval={intervalMs}
        volume={volume}
        onReady={this.handleReady}
        onPause={this.handlePause}
        onPlay={this.handlePlay}
        onDuration={this.handleDuration}
        onProgress={this.handleProgress}
        onError={onError}
      />
    );
  }
}
