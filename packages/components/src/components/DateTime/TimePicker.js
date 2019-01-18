import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import format from 'date-fns/format';
import addHours from 'date-fns/add_hours';

import Watch from './Watch';

import styles from './TimePicker.module.styl';

const getAMPM = date => {
  if (!date) {
    return null;
  }
  return format(date, 'a');
};

export default class TimePicker extends Component {
  static propTypes = {
    value: PropTypes.object, // eslint-disable-line
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: undefined,
  };

  handleChangeTime = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  handleToggle = evt => {
    const { value, onChange } = this.props;
    if (value) {
      const ampm = evt.target.dataset.val;
      const current = getAMPM(value);

      if (current !== ampm) {
        onChange(addHours(value, ampm === 'pm' ? 12 : -12));
      }
    }
  };

  render() {
    const { value } = this.props;

    const ampm = getAMPM(value);

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {value && (
            <div className={styles.value}>{format(value, 'HH:mm A')}</div>
          )}
        </div>
        <div className={styles.content}>
          <Watch date={value} onChange={this.handleChangeTime} />
        </div>
        <div className={styles.ampm}>
          <button
            type="button"
            className={cn(styles.btn, { [styles.selected]: ampm === 'am' })}
            data-val="am"
            onClick={this.handleToggle}
          >
            AM
          </button>
          <button
            type="button"
            className={cn(styles.btn, { [styles.selected]: ampm === 'pm' })}
            data-val="pm"
            onClick={this.handleToggle}
          >
            PM
          </button>
        </div>
      </div>
    );
  }
}
