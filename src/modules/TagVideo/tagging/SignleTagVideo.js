import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import VideoPreview from './player/VideoPreview';
import Timeline from './timeline/Timeline';
import EditTag from './tags/EditTag';

import styles from './styles.module.styl';

export default class SignleTagVideo extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired,
    className: PropTypes.string,
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    startTime: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    startTime: undefined,
    className: null,
    tag: null,
  };

  state = {
    duration: 0,
    seek: 0,
    playing: true,
    ready: false,
  };

  handleVideoReady = duration => {
    this.setState({ duration, ready: true });
  };

  handleVideoProgress = seek => {
    this.setState({ seek });
  };

  handleRangeDragging = dragging => {
    this.setState({ playing: !dragging });
  };

  handleTogglePlay = playing => {
    this.setState({ playing });
  };

  render() {
    const { video, className, tag, onChange, startTime } = this.props;
    const { duration, seek, playing, ready } = this.state;

    return (
      <div className={cn(styles.container, className)}>
        <div className={styles.content}>
          <div className={styles.video}>
            <VideoPreview
              src={video}
              start={(tag && tag.start) || startTime}
              stop={tag && tag.end}
              playing={playing}
              onVideoReady={this.handleVideoReady}
              onTogglePlay={this.handleTogglePlay}
              onVideoProgress={this.handleVideoProgress}
            />
          </div>
          <div className={styles.timeline}>
            <Timeline
              ready={ready}
              duration={duration}
              tag={tag}
              seek={seek}
              limitFrom={startTime}
              playing={playing}
              onTogglePlay={this.handleTogglePlay}
              onChangeTag={onChange}
              onRangeDragging={this.handleRangeDragging}
            />
          </div>
        </div>
        <div className={styles.tag}>
          {tag && (
            <EditTag
              duration={duration}
              tag={tag}
              onChange={onChange}
              limitFrom={startTime}
            />
          )}
          {!tag &&
            ready && <div className={styles.placeholder}>Pick start time</div>}
        </div>
      </div>
    );
  }
}
