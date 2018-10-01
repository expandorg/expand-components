import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { timeToPx } from '../utils/timeline';

import styles from './Range.module.styl';

export default class Range extends Component {
  static propTypes = {
    timelineWidth: PropTypes.number.isRequired,
    duration: PropTypes.number,
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number,
      tag: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    duration: 0,
  };

  render() {
    const { duration, tag, timelineWidth } = this.props;
    if (!duration) {
      return null;
    }

    const left = `${timeToPx(tag.start, duration, timelineWidth)}px`;
    const width = `${timeToPx(tag.end - tag.start, duration, timelineWidth)}px`;

    return (
      <div className={styles.container} style={{ left, width }}>
        <div className={styles.start} />
        <div className={styles.range} />
        <div className={styles.end} />
      </div>
    );
  }
}
