import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Draggable, Tooltip } from '@expandorg/components';

import { formatTime } from '../utils/timeStrings';
import { pxToTime, timeToPx } from '../utils/timeline';
import RangeBoundaries from '../utils/RangeBoundaries';

import styles from './TimelineRangeEdit.module.styl';

const DraggableTooltip = Tooltip(Draggable);

export default class TimelineRangeEdit extends Component {
  static propTypes = {
    timelineWidth: PropTypes.number.isRequired,
    duration: PropTypes.number,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    limitFrom: PropTypes.number,
    limitTo: PropTypes.number,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onDragging: PropTypes.func.isRequired,
  };

  static defaultProps = {
    limitFrom: undefined,
    limitTo: undefined,
    readOnly: false,
    duration: 0,
  };

  handleChangeStart = dx => {
    const {
      duration,
      start: startTime,
      end: endTime,
      timelineWidth,
      onChange,
      limitFrom,
      limitTo,
      readOnly,
    } = this.props;
    if (readOnly) {
      return;
    }
    const delta = pxToTime(dx, duration, timelineWidth);

    const { start, end } = RangeBoundaries.start(
      startTime + delta,
      startTime,
      endTime,
      duration,
      limitFrom,
      limitTo
    );
    onChange(start, end);
  };

  handleMove = dx => {
    const {
      duration,
      readOnly,
      start: startTime,
      end: endTime,
      timelineWidth,
      onChange,
      limitFrom,
      limitTo,
    } = this.props;
    if (readOnly) {
      return;
    }
    const delta = pxToTime(dx, duration, timelineWidth);
    const { start, end } = RangeBoundaries.move(
      delta,
      startTime,
      endTime,
      duration,
      limitFrom,
      limitTo
    );
    onChange(start, end);
  };

  handleChangeEnd = dx => {
    const {
      duration,
      start: startTime,
      end: endTime,
      timelineWidth,
      onChange,
      limitFrom,
      limitTo,
      readOnly,
    } = this.props;

    if (readOnly) {
      return;
    }
    const delta = pxToTime(dx, duration, timelineWidth);
    const { start, end } = RangeBoundaries.end(
      endTime + delta,
      startTime,
      endTime,
      duration,
      limitFrom,
      limitTo
    );
    onChange(start, end);
  };

  handleDragStart = () => {
    const { onDragging, readOnly } = this.props;
    if (!readOnly) {
      onDragging(true);
    }
  };

  handleDragEnd = () => {
    const { onDragging, readOnly } = this.props;
    if (!readOnly) {
      onDragging(false);
    }
  };

  render() {
    const { duration, start, end, timelineWidth } = this.props;
    if (!duration) {
      return null;
    }
    const left = `${timeToPx(start, duration, timelineWidth)}px`;
    const width = `${timeToPx(end - start, duration, timelineWidth)}px`;

    return (
      <div className={styles.container} style={{ left, width }}>
        <DraggableTooltip
          tooltip={`start time: ${formatTime(start)}`}
          className={styles.start}
          onDrag={this.handleChangeStart}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
        />
        <Draggable
          className={styles.range}
          onDrag={this.handleMove}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
        />
        <DraggableTooltip
          tooltip={`end time: ${formatTime(end)}`}
          className={styles.end}
          onDrag={this.handleChangeEnd}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
        />
      </div>
    );
  }
}
