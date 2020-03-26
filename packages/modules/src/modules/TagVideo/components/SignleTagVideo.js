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
    autoPlay: PropTypes.bool,
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    playbackRate: PropTypes.number,
    hideControls: PropTypes.bool,
    readOnly: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onError: PropTypes.func,
  };

  static defaultProps = {
    startTime: undefined,
    readOnly: false,
    hideControls: false,
    playbackRate: 1,
    autoPlay: false,
    className: null,
    tag: null,
    options: [],
    onError: Function.prototype,
  };

  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      playing: props.autoPlay,
    };
  }

  handleVideoReady = (duration) => {
    this.setState({ duration });
  };

  handleRangeChange = (start, end) => {
    const { onChange, tag, readOnly } = this.props;
    if (!readOnly) {
      onChange({ ...tag, start, end });
    }
  };

  handleCursorClick = (start) => {
    const { onChange, readOnly } = this.props;
    const { duration } = this.state;
    if (duration && !readOnly) {
      const end = Math.min(start + DEFAULT_SPAN_SEC, duration);
      onChange({ start, end, tag: '' });
    }
  };

  handleRangeDragging = (dragging) => {
    this.setState({ playing: !dragging });
  };

  handleTogglePlay = (playing) => {
    this.setState({ playing });
  };

  render() {
    const {
      video,
      className,
      tag,
      readOnly,
      onChange,
      startTime,
      playbackRate,
      hideControls,
      options,
      onError,
    } = this.props;
    const { duration, playing } = this.state;

    const editor = tag && !!duration;
    return (
      <div className={cn(styles.container, className)}>
        <VideoPlayer
          video={video}
          playing={playing}
          limitFrom={startTime}
          start={tag && tag.start}
          playbackRate={playbackRate}
          playbackRateControl
          stop={tag && tag.end}
          cursor={!tag}
          onReady={this.handleVideoReady}
          onTogglePlay={this.handleTogglePlay}
          onCursorClick={this.handleCursorClick}
          onError={onError}
        >
          {({ width }) =>
            editor && (
              <TimelineRangeEdit
                timelineWidth={width}
                readOnly={readOnly}
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
        {!(readOnly && hideControls) && (
          <div className={styles.tag}>
            {tag && (
              <EditTag
                readOnly={readOnly}
                options={options}
                duration={duration}
                tag={tag}
                limitFrom={startTime}
                onChange={onChange}
                onSave={onChange}
              />
            )}
            {!tag && !!duration && (
              <div className={styles.placeholder}>
                Pick a start time by clicking on the timeline.
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
