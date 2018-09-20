import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Draggable from '../../../../components/Draggable';
import Tooltip from '../../../../components/Tooltip';

import styles from './TimelineRange.module.styl';

const DraggableTooltip = Tooltip(Draggable);

const timeToPx = (span, timeline, width) => (span / timeline) * width;
const pxToTime = (px, timeline, width) => (px / width) * timeline;

export default class TimelineRange extends Component {
  static propTypes = {
    timelineWidth: PropTypes.number.isRequired,
    duration: PropTypes.number,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    duration: 0,
  };

  handleChangeStart = dx => {
    const { duration, start, end, timelineWidth, onChange } = this.props;
    const delta = pxToTime(dx, duration, timelineWidth);
    onChange(start + delta, end);
  };

  handleChangeEnd = dx => {
    const { duration, start, end, timelineWidth, onChange } = this.props;
    const delta = pxToTime(dx, duration, timelineWidth);
    onChange(start, end + delta);
  };

  handleMove = dx => {
    const { duration, start, end, timelineWidth, onChange } = this.props;
    const delta = pxToTime(dx, duration, timelineWidth);
    onChange(start + delta, end + delta);
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
          tooltip={`start: ${start}`}
          className={styles.start}
          onDrag={this.handleChangeStart}
        />
        <Draggable className={styles.range} onDrag={this.handleMove} />
        <DraggableTooltip
          tooltip={`end: ${end}`}
          className={styles.end}
          onDrag={this.handleChangeEnd}
        />
      </div>
    );
  }
}
