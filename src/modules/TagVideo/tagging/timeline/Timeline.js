import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TimelineContainer from './TimelineContainer';
import EditRange from './EditRange';
import Range from './Range';

import Progress from './Progress';
import Cursor from './Cursor';
import PlayButton from './PlayButton';
import Scale from './Scale';
import Boundaries from './Boundaries';

import { pxToTime } from '../utils/timeline';

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
    limitFrom: PropTypes.number,
    limitTo: PropTypes.number,
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
    limitFrom: undefined,
    limitTo: undefined,
    tags: [],
    seek: 0,
  };

  handleRangeChange = (start, end) => {
    const { onChangeTag, tag } = this.props;
    onChangeTag({ ...tag, start, end });
  };

  handleCursorClick = (start, pos, evt) => {
    evt.preventDefault();
    const { duration, onChangeTag, ready } = this.props;
    if (ready) {
      const end = Math.min(start + DEFAULT_SPAN_SEC, duration);
      onChangeTag({ start, end, tag: '' });
    }
  };

  render() {
    const {
      duration,
      seek,
      limitFrom,
      limitTo,
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
              <Scale width={width} duration={duration} />
              <Boundaries
                width={width}
                duration={duration}
                limitFrom={limitFrom}
                limitTo={limitTo}
              />
              {playing && ready && <Progress duration={duration} seek={seek} />}
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
                    position={mouseX}
                    time={pxToTime(mouseX, duration, width)}
                    limitFrom={limitFrom}
                    limitTo={limitTo}
                    onClick={this.handleCursorClick}
                  />
                )}
              {tag && (
                <EditRange
                  timelineWidth={width}
                  start={tag.start}
                  end={tag.end}
                  duration={duration}
                  limitFrom={limitFrom}
                  limitTo={limitTo}
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
