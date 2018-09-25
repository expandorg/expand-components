import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Player from 'react-player';

export const intervalMs = 40;

export default class VideoPreview extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    start: PropTypes.number,
    stop: PropTypes.number,
    onVideoReady: PropTypes.func.isRequired,
    onVideoProgress: PropTypes.func.isRequired,
  };

  state = {
    canPlay: false,
    playedSeconds: 0,
  };

  static defaultProps = {
    className: null,
    start: 0,
    stop: null,
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
    const { playedSeconds } = this.state;
    if (start !== prevStart || stop !== prevStop) {
      if (playedSeconds > stop || playedSeconds < start) {
        this.playerRef.current.seekTo(start);
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
    this.setState({ playedSeconds });
    if (start !== null && stop !== null) {
      if (playedSeconds > stop) {
        this.playerRef.current.seekTo(start);
      }
    }
    onVideoProgress(playedSeconds);
  };

  render() {
    const { src, className } = this.props;
    const { canPlay } = this.state;

    return (
      <div className={className}>
        <Player
          ref={this.playerRef}
          url={src}
          loop
          playing={canPlay}
          width="100%"
          playsinline
          playbackRate={1}
          progressInterval={intervalMs}
          volume={0}
          onReady={this.handleReady}
          onDuration={this.handleDuration}
          onProgress={this.handleProgress}
        />
      </div>
    );
  }
}
