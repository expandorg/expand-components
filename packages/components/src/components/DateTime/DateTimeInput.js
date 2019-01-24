import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import format from 'date-fns/format';

import DateTimePicker from './DateTimePicker';

import styles from './DateTimeInput.module.styl';

export default class DateTimeInput extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    name: PropTypes.string,
    className: PropTypes.string,
    readOnly: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    disabledDays: PropTypes.any, // eslint-disable-line
    formatter: PropTypes.func,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    name: null,
    error: false,
    placeholder: null,
    disabledDays: undefined,
    readOnly: false,
    formatter: value => format(value, 'MM/DD/YYYY HH:mm'),
    value: undefined,
  };

  state = {
    picker: false,
  };

  handleToggle = evt => {
    if (evt) {
      evt.preventDefault();
    }
    const { readOnly } = this.props;
    if (!readOnly) {
      this.setState(({ picker }) => ({ picker: !picker }));
    }
  };

  handleHide = () => {
    this.setState({ picker: false });
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange({ target: { name, value } });
    this.handleHide();
  };

  render() {
    const {
      value,
      placeholder,
      disabledDays,
      formatter,
      className,
      error,
    } = this.props;
    const { picker } = this.state;

    /* eslint-disable jsx-a11y/click-events-have-key-events  */
    /* eslint-disable jsx-a11y/no-static-element-interactions  */
    /* eslint-disable jsx-a11y/label-has-associated-control */
    /* eslint-disable jsx-a11y/label-has-for */

    const classes = cn(styles.input, {
      [styles.error]: error,
      [styles.filled]: !!value,
    });

    return (
      <div className={cn(styles.container, className)}>
        <div className={classes} onClick={this.handleToggle}>
          {value && formatter(value)}
        </div>
        {placeholder && (
          <label className={styles.label} placeholder={placeholder} />
        )}
        {picker && (
          <DateTimePicker
            disabledDays={disabledDays}
            value={value}
            className={styles.picker}
            onChange={this.handleChange}
            onHide={this.handleToggle}
          />
        )}
      </div>
    );
  }
}
