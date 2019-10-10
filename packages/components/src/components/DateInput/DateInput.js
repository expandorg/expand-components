import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';

import format from 'date-fns/format';
import parse from 'date-fns/parse';

import './DateInput.styl';

const dateFnsparseDate = (str, fmt, locale) => {
  const parsed = parse(str, fmt, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
};

const dateFnsformatDate = (date, fmt, locale) => format(date, fmt, { locale });

export default class DateInput extends Component {
  static propTypes = {
    inputProps: PropTypes.shape({}),
    theme: PropTypes.oneOf(['default', 'white']),
    error: PropTypes.bool,
    format: PropTypes.string,
    formatDate: PropTypes.func,
    parseDate: PropTypes.func,
  };

  static defaultProps = {
    theme: 'default',
    error: false,
    inputProps: {},
    format: 'MM/DD/YYYY',
    formatDate: dateFnsformatDate,
    parseDate: dateFnsparseDate,
  };

  render() {
    const {
      error,
      theme,
      formatDate,
      parseDate,
      inputProps,
      ...rest
    } = this.props;
    return (
      <DayPickerInput
        inputProps={{
          ...inputProps,
          className: cn(
            'DayPickerInput-input',
            `DayPickerInput-theme-${theme}`,
            {
              'DayPickerInput-error': error,
            }
          ),
        }}
        formatDate={formatDate}
        format="MM/DD/YYYY"
        parseDate={parseDate}
        {...rest}
      />
    );
  }
}
