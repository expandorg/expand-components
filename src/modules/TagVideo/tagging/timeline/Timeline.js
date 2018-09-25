import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TimelineContainer from './TimelineContainer';
import TimelineRange from './TimelineRange';
import Progress from './Progress';
import Cursor from './Cursor';

import styles from './Timeline.module.styl';

export default class Timeline extends Component {
  static propTypes = {
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number,
      tag: PropTypes.string,
    }),
    duration: PropTypes.number,
    seek: PropTypes.number,
    onChangeTag: PropTypes.func.isRequired,
  };

  static defaultProps = {
    duration: 0,
    tag: null,
    seek: 0,
  };

  handleRangeChange = (start, end) => {
    const { onChangeTag, tag } = this.props;
    onChangeTag({ ...tag, start, end });
  };

  handleCursorClick = cursorX => {
    console.log(`clicked ${cursorX}`);
  };

  render() {
    const { duration, seek, tag } = this.props;
    return (
      <TimelineContainer className={styles.slider}>
        {({ width, isHovered, mouseX }) => (
          <Fragment>
            {isHovered && (
              <Cursor left={mouseX} onClick={this.handleCursorClick} />
            )}
            {tag && (
              <TimelineRange
                timelineWidth={width}
                start={tag.start}
                end={tag.end}
                duration={duration}
                onChange={this.handleRangeChange}
              />
            )}
            <Progress duration={duration} seek={seek} />
          </Fragment>
        )}
      </TimelineContainer>
    );
  }
}
