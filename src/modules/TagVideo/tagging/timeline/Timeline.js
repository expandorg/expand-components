import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TimelineContainer from './TimelineContainer';
import TimelineRange from './TimelineRange';
import Progress from './Progress';
import Cursor from './Cursor';
import PlayButton from './PlayButton';
// import Scales from './Scales';

import { pxToTime, formatTime, DEFAULT_SPAN_SEC } from '../clip';

import styles from './Timeline.module.styl';

export default class Timeline extends Component {
  static propTypes = {
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number,
      tag: PropTypes.string,
    }),
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
              {/* <Scales width={width} ready={ready} duration={duration} /> */}
              <Progress duration={duration} seek={seek} />
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
                <TimelineRange
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
