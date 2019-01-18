import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import setHours from 'date-fns/set_hours';
import getHours from 'date-fns/get_hours';

import { range } from '../../common/immutable';

import styles from './Watch.module.styl';

const getTransform = d =>
  `rotate(${d * 30}deg) translate(0, -73px) rotate(-${d * 30}deg)`;

const getAmHours = date => {
  if (!date) {
    return null;
  }
  return getHours(date) % 12;
};

export default class Watch extends Component {
  static propTypes = {
    date: PropTypes.object, // eslint-disable-line
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    date: null,
  };

  handleClick = evt => {
    evt.preventDefault();
    const { date, onChange } = this.props;
    if (date) {
      const hour = +evt.target.dataset.hour;
      const actual = getHours(date) >= 12 ? 12 + hour : hour;
      onChange(setHours(date, actual));
    }
  };

  render() {
    const { date } = this.props;
    const time = getAmHours(date);
    return (
      <div className={styles.container}>
        {time !== null && (
          <div
            className={styles.arrow}
            style={{ transform: `rotate(${(time - 3) * 30}deg)` }}
          />
        )}
        {range(12).map(h => (
          <button
            key={h}
            onClick={this.handleClick}
            type="button"
            data-hour={h}
            className={cn(styles.digit, { [styles.selected]: h === time })}
            style={{ transform: getTransform(h) }}
          >
            {h || 12}
          </button>
        ))}
      </div>
    );
  }
}
