import React, { useCallback } from 'react';
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

import { Dropdown } from '../Dropdown';

import './DropdownDate.styl';

const monthes = range(12);
const dates = rangeFrom(1930, getYear(new Date()) + 1).sort((a, b) => b - a);

const fixDate = (value, year, month) => {
  const current = getDate(value);
  const lastDayInNewMonth = getDaysInMonth(new Date(year, month, 1)) - 1;
  const adjustedDay = Math.min(lastDayInNewMonth, current);
  return setDate(value, adjustedDay);
};

export default function DropdownDate({ className, value, theme, onChange }) {
  const changeDate = useCallback(date => onChange(setDate(value, date)), [
    onChange,
    value,
  ]);

  const changeMonth = useCallback(
    month => {
      const fixed = fixDate(value, getYear(value), month);
      onChange(setMonth(fixed, month));
    },
    [onChange, value]
  );

  const changeYear = useCallback(
    year => {
      const fixed = fixDate(value, year, getMonth(value));
      onChange(setYear(fixed, year));
    },
    [onChange, value]
  );

  return (
    <div className={cn('gem-dropdowndate', className)}>
      <Dropdown
        label="Month"
        theme={theme}
        value={getMonth(value)}
        options={monthes}
        className="gem-dropdowndate-dropdown"
        onChange={changeMonth}
        formatter={month => format(setMonth(value, month), 'MMM')}
      />
      <Dropdown
        label="Day"
        theme={theme}
        value={getDate(value)}
        options={range(getDaysInMonth(value))}
        className="gem-dropdowndate-dropdown"
        onChange={changeDate}
        formatter={day => day + 1}
      />
      <Dropdown
        label="Year"
        theme={theme}
        value={getYear(value)}
        options={dates}
        className="gem-dropdowndate-dropdown"
        onChange={changeYear}
      />
    </div>
  );
}

DropdownDate.propTypes = {
  className: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  theme: PropTypes.oneOf(['default', 'white']),
  onChange: PropTypes.func.isRequired,
};

DropdownDate.defaultProps = {
  className: null,
  theme: 'default',
  value: new Date(),
};
