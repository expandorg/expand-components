import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TimelineContainer from './TimelineContainer';
import EditRange from './EditRange';
import Range from './Range';

import Progress from './Progress';
import Cursor from './Cursor';
import PlayButton from './PlayButton';
import Scale from './Scale';

import { pxToTime } from '../utils/timeline';
import { formatTime } from '../utils/timeStrings';
import { DEFAULT_SPAN_SEC } from '../utils/RangeBoundaries';

import styles from './Timeline.module.styl';

export default class Timeline extends Component {
  static propTypes = {
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number,
      tag: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        start: PropTypes.number.isRequired,
        end: PropTypes.number,
        tag: PropTypes.string,
      })
    ),
    duration: PropTypes.number,
    ready: PropTypes.bool,
    playing: PropTypes.bool.isRequired,
    seek: PropTypes.number,
    onTogglePlay: PropTypes.func.isRequired,
    onChangeTag: PropTypes.func.isRequired,
    onRangeDragging: PropTypes.func.isRequired,
  };

  static defaultProps = {
    duration: 0,
    ready: false,
    tag: null,
    tags: [],
    seek: 0,
  };

  handleRangeChange = (start, end) => {
    const { onChangeTag, tag } = this.props;
    onChangeTag({ ...tag, start, end });
  };

  handleCursorClick = (cursorX, width) => {
    const { duration, onChangeTag, ready } = this.props;
    if (ready) {
      const start = pxToTime(cursorX, duration, width);
      const end = Math.min(start + DEFAULT_SPAN_SEC, duration);
      onChangeTag({ start, end, tag: '' });
    }
  };

  render() {
    const {
      duration,
      seek,
      tag,
      tags,
      playing,
      ready,
      onTogglePlay,
      onRangeDragging,
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.play}>
          <PlayButton
            disabled={!ready}
            playing={playing}
            tooltip={playing ? 'Pause' : 'Play'}
            onToggle={onTogglePlay}
          />
        </div>
        <TimelineContainer className={styles.timeline}>
          {({ width, isHovered, mouseX }) => (
            <Fragment>
              <Scale width={width} ready={ready} duration={duration} />
              <Progress duration={duration} seek={seek} />
              {!tag &&
                ready &&
                tags.map(t => (
                  <Range
                    key={t.id}
                    tag={t}
                    timelineWidth={width}
                    duration={duration}
                  />
                ))}
              {!tag &&
                isHovered && (
                  <Cursor
                    left={mouseX}
                    label={`start time: ${formatTime(
                      pxToTime(mouseX, duration, width)
                    )}`}
                    onClick={() => this.handleCursorClick(mouseX, width)}
                  />
                )}
              {tag && (
                <EditRange
                  timelineWidth={width}
                  start={tag.start}
                  end={tag.end}
                  duration={duration}
                  onChange={this.handleRangeChange}
                  onDragging={onRangeDragging}
                />
              )}
            </Fragment>
          )}
        </TimelineContainer>
      </div>
    );
  }
}
