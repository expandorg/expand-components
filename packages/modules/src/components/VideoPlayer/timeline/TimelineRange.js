import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { timeToPx } from '../utils/timeline';

import styles from './TimelineRange.module.styl';

export default class TimelineRange extends Component {
  static propTypes = {
    timelineWidth: PropTypes.number.isRequired,
    duration: PropTypes.number,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  };

  static defaultProps = {
    duration: 0,
  };

  render() {
    const { duration, start, end, timelineWidth } = this.props;
    if (!duration || !timelineWidth) {
      return null;
    }

    const left = `${timeToPx(start, duration, timelineWidth)}px`;
    const width = `${timeToPx(end - start, duration, timelineWidth)}px`;

    return (
      <div className={styles.container} style={{ left, width }}>
        <div className={styles.start} />
        <div className={styles.range} />
        <div className={styles.end} />
      </div>
    );
  }
}
