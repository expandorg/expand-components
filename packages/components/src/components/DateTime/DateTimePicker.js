import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DayPicker from 'react-day-picker';

import TimePicker from './TimePicker';

import styles from './DateTimePicker.module.styl';

import '../DateInput/DateInput.styl';

export default class DateTimePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object, // eslint-disable-line
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    disabledDays: PropTypes.any, // eslint-disable-line
    onHide: PropTypes.func.isRequired,
  };

  static defaultProps = {
    disabledDays: undefined,
    className: null,
    error: null,
    value: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      initial: props.value, // eslint-disable-line react/no-unused-state
      value: props.value,
    };
  }

  static getDerivedStateFromProps({ value }, state) {
    if (value !== state.initial) {
      return {
        value,
        initial: value,
      };
    }
    return null;
  }

  handleChange = (value, modifiers) => {
    if (!modifiers || (modifiers && !modifiers.disabled)) {
      this.setState({ value });
    }
  };

  handleDone = (evt) => {
    const { onChange } = this.props;
    const { value } = this.state;
    if (value) {
      onChange(value);
    }
    evt.preventDefault();
  };

  handleCancel = (evt) => {
    const { onHide } = this.props;
    onHide();

    evt.preventDefault();
  };

  render() {
    const { className, disabledDays, error } = this.props;
    const { value } = this.state;

    return (
      <div className={cn(styles.container, className)}>
        <div className={styles.content}>
          <div className={styles.date}>
            <DayPicker
              disabledDays={disabledDays}
              selectedDays={value}
              onDayClick={this.handleChange}
            />
          </div>
          <div className={styles.time}>
            <TimePicker value={value} onChange={this.handleChange} />
          </div>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <div className={styles.actions}>
          <button
            className={cn(styles.button, styles.cancel)}
            onClick={this.handleCancel}
          >
            cancel
          </button>
          <button className={styles.button} onClick={this.handleDone}>
            done
          </button>
        </div>
      </div>
    );
  }
}
