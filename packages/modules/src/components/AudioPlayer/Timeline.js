import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TimelineContainer, Ticks, Cursor, Progress } from '../Timeline';

import { pxToTime } from '../Timeline/utils/timeline';

import styles from './Timeline.module.styl';

export default class Timeline extends Component {
  static propTypes = {
    duration: PropTypes.number,
    seek: PropTypes.number,
    onCursorClick: PropTypes.func,
  };

  static defaultProps = {
    duration: 0,
    seek: 0,
    onCursorClick: Function.prototype,
  };

  render() {
    const { duration, seek, onCursorClick } = this.props;

    const showProgress = !!duration;
    const showCursor = !!duration;

    return (
      <TimelineContainer className={styles.timeline}>
        {({ width, isHovered, mouseX }) => (
          <>
            <Ticks width={width} duration={duration} />
            {showProgress && <Progress duration={duration} seek={seek} />}
            {showCursor && isHovered && (
              <Cursor
                position={mouseX}
                time={pxToTime(mouseX, duration, width)}
                onClick={onCursorClick}
              />
            )}
          </>
        )}
      </TimelineContainer>
    );
  }
}
