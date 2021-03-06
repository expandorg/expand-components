import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatTime } from './utils/timeStrings';
import RangeBoundaries from './utils/RangeBoundaries';

import styles from './Cursor.module.styl';

export default class Cursor extends Component {
  static propTypes = {
    position: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,

    limitFrom: PropTypes.number,
    limitTo: PropTypes.number,

    onClick: PropTypes.func,
    labelFormatter: PropTypes.func,
  };

  static defaultProps = {
    limitFrom: undefined,
    limitTo: undefined,
    labelFormatter: (time) => `${time}`,
    onClick: Function.prototype,
  };

  handleClick = (evt) => {
    const { position, time, onClick } = this.props;
    onClick(time, position, evt);
  };

  render() {
    const { position, time, limitFrom, limitTo, labelFormatter } = this.props;

    const { from, to } = RangeBoundaries.hasBoundaries(limitFrom, limitTo);
    if ((from && time <= limitFrom) || (to && time >= limitTo)) {
      return null;
    }

    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */

    return (
      <div
        onClick={this.handleClick}
        style={{ left: position - 1 }}
        className={styles.cursor}
      >
        <span className={styles.label}>
          {labelFormatter(formatTime(time, { hours: true }))}
        </span>
      </div>
    );
  }
}
