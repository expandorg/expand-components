import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import format from 'date-fns/format';

import getDate from 'date-fns/get_date';
import setDate from 'date-fns/set_date';
import getMonth from 'date-fns/get_month';
import setMonth from 'date-fns/set_month';
import getDaysInMonth from 'date-fns/get_days_in_month';
import getYear from 'date-fns/get_year';
import setYear from 'date-fns/set_year';

import { range, rangeFrom } from '../../common/immutable';

import Dropdown from '../Dropdown';

import './DateInput.styl';

const monthes = range(12);
const dates = rangeFrom(1930, getYear(new Date()) + 1).sort((a, b) => b - a);

const fixDate = (value, year, month) => {
  const current = getDate(value);
  const lastDayInNewMonth = getDaysInMonth(new Date(year, month, 1)) - 1;
  const adjustedDay = Math.min(lastDayInNewMonth, current);
  return setDate(value, adjustedDay);
};

export default class DateInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    value: new Date(),
  };

  handleChangeDate = date => {
    const { onChange, value } = this.props;
    onChange(setDate(value, date));
  };

  handleChangeMonth = month => {
    const { onChange, value } = this.props;
    const fixed = fixDate(value, getYear(value), month);
    onChange(setMonth(fixed, month));
  };

  handleChangeYear = year => {
    const { onChange, value } = this.props;
    const fixed = fixDate(value, year, getMonth(value));
    onChange(setYear(fixed, year));
  };

  render() {
    const { className, value } = this.props;
    return (
      <div className={cn('gem-dateinput', className)}>
        <Dropdown
          value={getMonth(value)}
          options={monthes}
          className={cn('gem-dateinput-dropdown', 'gem-dateinput-month')}
          onChange={this.handleChangeMonth}
          formatter={month => format(setMonth(value, month), 'MMM')}
        >
          {({ formatted }) => formatted}
        </Dropdown>
        <Dropdown
          value={getDate(value)}
          options={range(getDaysInMonth(value))}
          className={cn('gem-dateinput-dropdown', 'gem-dateinput-day')}
          onChange={this.handleChangeDate}
          formatter={day => day + 1}
        >
          {({ formatted }) => formatted}
        </Dropdown>
        <Dropdown
          value={getYear(value)}
          options={dates}
          className={cn('gem-dateinput-dropdown', 'gem-dateinput-year')}
          onChange={this.handleChangeYear}
        >
          {({ formatted }) => formatted}
        </Dropdown>
      </div>
    );
  }
}
