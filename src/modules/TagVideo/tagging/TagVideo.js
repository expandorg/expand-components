import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import VideoPreview from './player/VideoPreview';
import Timeline from './timeline/Timeline';
import Tags from './tags/Tags';

import styles from './TagVideo.module.styl';

export default class TagVideo extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired,
    className: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        tag: PropTypes.string,
      })
    ),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    tags: [],
  };

  state = {
    duration: 0,
    seek: 0,
    tag: null,
  };

  handleVideoReady = duration => {
    this.setState({ duration });
  };

  handleVideoProgress = seek => {
    this.setState({ seek });
  };

  handleChangeTag = tag => {
    this.setState({ tag });
  };

  render() {
    const { video, className } = this.props;
    const { duration, seek, tag } = this.state;

    return (
      <div className={cn(styles.container, className)}>
        <div className={styles.content}>
          <div className={styles.video}>
            <VideoPreview
              src={video}
              start={tag && tag.start}
              stop={tag && tag.end}
              duration={duration}
              onVideoReady={this.handleVideoReady}
              onVideoProgress={this.handleVideoProgress}
            />
          </div>
          <div className={styles.timeline}>
            <Timeline
              duration={duration}
              tag={tag}
              seek={seek}
              onChangeTag={this.handleChangeTag}
            />
          </div>
        </div>
        <div className={styles.tags}>
          <Tags />
        </div>
      </div>
    );
  }
}
