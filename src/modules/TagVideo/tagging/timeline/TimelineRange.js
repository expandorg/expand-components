import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Draggable from '../../../../components/Draggable';
import Tooltip from '../../../../components/Tooltip';

import { pxToTime, timeToPx, formatTime, RangeBoundaries } from '../clip';

import styles from './TimelineRange.module.styl';

const DraggableTooltip = Tooltip(Draggable);

export default class TimelineRange extends Component {
  static propTypes = {
    timelineWidth: PropTypes.number.isRequired,
    duration: PropTypes.number,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragging: PropTypes.func.isRequired,
  };

  static defaultProps = {
    duration: 0,
  };

  handleChangeStart = dx => {
    const {
      duration,
      start: startTime,
      end: endTime,
      timelineWidth,
      onChange,
    } = this.props;
    const delta = pxToTime(dx, duration, timelineWidth);

    const { start, end } = RangeBoundaries.start(
      startTime + delta,
      startTime,
      endTime,
      duration
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
    } = this.props;
    const delta = pxToTime(dx, duration, timelineWidth);
    const { start, end } = RangeBoundaries.end(
      endTime + delta,
      startTime,
      endTime,
      duration
    );
    onChange(start, end);
  };

  handleMove = dx => {
    const { duration, start, end, timelineWidth, onChange } = this.props;
    const delta = pxToTime(dx, duration, timelineWidth);
    onChange(start + delta, end + delta);
  };

  handleDragStart = () => {
    const { onDragging } = this.props;
    onDragging(true);
  };

  handleDragEnd = () => {
    const { onDragging } = this.props;
    onDragging(false);
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
