import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  TimelineContainer,
  Ticks,
  Cursor,
  Boundaries,
  Progress,
} from '../../Timeline';

import { pxToTime } from '../../Timeline/utils/timeline';

import styles from './Timeline.module.styl';

const labelFormatter = time => `start time: ${time}`;

export default class Timeline extends Component {
  static propTypes = {
    limitFrom: PropTypes.number,
    limitTo: PropTypes.number,
    duration: PropTypes.number,
    playing: PropTypes.bool.isRequired,
    cursor: PropTypes.bool.isRequired,
    seek: PropTypes.number,
    onCursorClick: PropTypes.func,
  };

  static defaultProps = {
    duration: 0,
    limitFrom: undefined,
    limitTo: undefined,
    seek: 0,
    onCursorClick: Function.prototype,
  };

  render() {
    const {
      duration,
      children,
      seek,
      limitFrom,
      limitTo,
      playing,
      cursor,
      onCursorClick,
    } = this.props;
    const showProgress = playing && !!duration;
    const showCursor = cursor && !!duration;

    return (
      <TimelineContainer className={styles.timeline}>
        {({ width, isHovered, mouseX }) => (
          <>
            <Ticks width={width} duration={duration} />
            <Boundaries
              width={width}
              duration={duration}
              limitFrom={limitFrom}
              limitTo={limitTo}
            />
            {showProgress && <Progress duration={duration} seek={seek} />}
            {showCursor && isHovered && (
              <Cursor
                labelFormatter={labelFormatter}
                position={mouseX}
                time={pxToTime(mouseX, duration, width)}
                limitFrom={limitFrom}
                limitTo={limitTo}
                onClick={onCursorClick}
              />
            )}
            {children({ width })}
          </>
        )}
      </TimelineContainer>
    );
  }
}
