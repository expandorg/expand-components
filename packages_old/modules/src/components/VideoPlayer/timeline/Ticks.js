import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getTicks } from '../utils/scales';
import { timeToPx } from '../utils/timeline';

import styles from './Ticks.module.styl';

const Tick = ({ tick, left }) => (
  <div className={styles.tick} style={{ left }}>
    {tick.time}
  </div>
);

Tick.propTypes = {
  left: PropTypes.number.isRequired,
  tick: PropTypes.object.isRequired, // eslint-disable-line
};

export default class Ticks extends PureComponent {
  static propTypes = {
    width: PropTypes.number,
    duration: PropTypes.number,
  };

  static defaultProps = {
    duration: 0,
    width: 0,
  };

  render() {
    const { width, duration } = this.props;
    if (!duration || !width) {
      return null;
    }
    const ticks = getTicks(0, duration, width, 50);
    return (
      <div className={styles.container}>
        {ticks.map(tick => (
          <Tick
            key={tick.tick}
            tick={tick}
            left={timeToPx(tick.tick, duration, width)}
          />
        ))}
      </div>
    );
  }
}
