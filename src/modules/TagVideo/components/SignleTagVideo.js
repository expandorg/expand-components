import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
  VideoPlayer,
  TimelineRangeEdit,
} from '../../../components/VideoPlayer';

import EditTag from './tags/EditTag';

import styles from './styles.module.styl';

const DEFAULT_SPAN_SEC = 2;

export default class SignleTagVideo extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired,
    className: PropTypes.string,
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    options: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    startTime: undefined,
    className: null,
    tag: null,
    options: [],
  };

  state = {
    duration: 0,
    playing: true,
  };

  handleVideoReady = duration => {
    this.setState({ duration });
  };

  handleRangeChange = (start, end) => {
    const { onChange, tag } = this.props;
    onChange({ ...tag, start, end });
  };

  handleCursorClick = start => {
    const { onChange } = this.props;
    const { duration } = this.state;
    if (duration) {
      const end = Math.min(start + DEFAULT_SPAN_SEC, duration);
      onChange({ start, end, tag: '' });
    }
  };

  handleRangeDragging = dragging => {
    this.setState({ playing: !dragging });
  };

  handleTogglePlay = playing => {
    this.setState({ playing });
  };

  render() {
    const { video, className, tag, onChange, startTime, options } = this.props;
    const { duration, playing } = this.state;

    const editor = tag && !!duration;

    return (
      <div className={cn(styles.container, className)}>
        <VideoPlayer
          video={video}
          playing={playing}
          limitFrom={startTime}
          start={tag && tag.start}
          stop={tag && tag.end}
          cursor={!tag}
          onReady={this.handleVideoReady}
          onTogglePlay={this.handleTogglePlay}
          onCursorClick={this.handleCursorClick}
        >
          {({ width }) =>
            editor && (
              <TimelineRangeEdit
                timelineWidth={width}
                start={tag.start}
                end={tag.end}
                duration={duration}
                limitFrom={startTime}
                onChange={this.handleRangeChange}
                onDragging={this.handleRangeDragging}
              />
            )
          }
        </VideoPlayer>
        <div className={styles.tag}>
          {tag && (
            <EditTag
              options={options}
              duration={duration}
              tag={tag}
              limitFrom={startTime}
              onChange={onChange}
            />
          )}
          {!tag &&
            !!duration && (
              <div className={styles.placeholder}>Pick start time</div>
            )}
        </div>
      </div>
    );
  }
}
