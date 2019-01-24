import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { timeToPx } from '../utils/timeline';

import styles from './TimelineRange.module.styl';

export default class TimelineRange extends Component {
  static propTypes = {
    timelineWidth: PropTypes.number.isRequired,
    duration: PropTypes.number,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    index: PropTypes.number,
  };

  static defaultProps = {
    duration: 0,
    index: null,
  };

  render() {
    const { duration, start, end, index, timelineWidth } = this.props;
    if (!duration || !timelineWidth) {
      return null;
    }

    const left = `${timeToPx(start, duration, timelineWidth)}px`;
    const width = `${timeToPx(end - start, duration, timelineWidth)}px`;

    return (
      <div
        style={{ left, width }}
        className={cn(styles.container, {
          [styles[`color-${index}`]]: index !== null,
        })}
      >
        <div className={styles.start} />
        <div className={styles.range} />
        <div className={styles.end} />
      </div>
    );
  }
}
