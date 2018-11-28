import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Player from 'react-player';

export const intervalMs = 40;

export default class VideoPreview extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    playing: PropTypes.bool,
    start: PropTypes.number,
    stop: PropTypes.number,
    playbackRate: PropTypes.number,
    onTogglePlay: PropTypes.func.isRequired,
    onVideoReady: PropTypes.func.isRequired,
    onVideoProgress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    playing: true,
    start: 0,
    playbackRate: 1,
    stop: null,
  };

  state = {
    canPlay: false,
  };

  playerRef = createRef();

  componentDidMount() {
    const { start } = this.props;
    if (start) {
      this.playerRef.current.seekTo(start);
    }
  }

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

  handleReady = () => {
    this.setState({ canPlay: true });
  };

  handleDuration = duration => {
    const { onVideoReady } = this.props;
    onVideoReady(duration);
  };

  handleProgress = ({ playedSeconds }) => {
    const { stop, start, onVideoProgress } = this.props;
    if (start !== null && stop !== null) {
      if (playedSeconds > stop) {
        this.playerRef.current.seekTo(start);
      }
    }
    onVideoProgress(playedSeconds);
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
    const { src, playing, className, playbackRate } = this.props;
    const { canPlay } = this.state;

    return (
      <div className={className}>
        <Player
          ref={this.playerRef}
          url={src}
          loop
          playing={canPlay && playing}
          width="100%"
          playsinline
          playbackRate={playbackRate}
          progressInterval={intervalMs}
          volume={0}
          onReady={this.handleReady}
          onPause={this.handlePause}
          onPlay={this.handlePlay}
          onDuration={this.handleDuration}
          onProgress={this.handleProgress}
        />
      </div>
    );
  }
}
