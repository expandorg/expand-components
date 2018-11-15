import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TimelineContainer from './TimelineContainer';

import Progress from './Progress';
import Ticks from './Ticks';
import Boundaries from './Boundaries';
import Cursor from './Cursor';

import { pxToTime } from '../utils/timeline';

import styles from './Timeline.module.styl';

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
          <Fragment>
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
                position={mouseX}
                time={pxToTime(mouseX, duration, width)}
                limitFrom={limitFrom}
                limitTo={limitTo}
                onClick={onCursorClick}
              />
            )}
            {children({ width })}
          </Fragment>
        )}
      </TimelineContainer>
    );
  }
}
