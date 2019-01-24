import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { timeToPx } from '../utils/timeline';

import RangeBoundaries from '../utils/RangeBoundaries';

import styles from './Boundaries.module.styl';

export default class Boundaries extends PureComponent {
  static propTypes = {
    duration: PropTypes.number,
    width: PropTypes.number,
    limitFrom: PropTypes.number,
    limitTo: PropTypes.number,
  };

  static defaultProps = {
    duration: 0,
    width: 0,
    limitFrom: undefined,
    limitTo: undefined,
  };

  render() {
    const { limitFrom, limitTo, duration, width } = this.props;

    const { from, to } = RangeBoundaries.hasBoundaries(limitFrom, limitTo);

    if ((!from && !to) || !width || !duration) {
      return null;
    }

    return (
      <>
        {from && (
          <div
            className={cn(styles.boundary, styles.from)}
            style={{ width: timeToPx(limitFrom, duration, width) }}
          />
        )}
        {to && (
          <div
            className={cn(styles.boundary, styles.to)}
            style={{ width: timeToPx(duration - limitTo, duration, width) }}
          />
        )}
      </>
    );
  }
}
