import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './DropdownBase.styl';

const formatItem = (option) => {
  if (typeof option === 'string' || typeof option === 'number') {
    return { value: option, label: option };
  }
  return option;
};

export default function DropdownBase({
  value,
  options,
  className,
  onChange,
  children,
  disabled,
  nullValue,
  formatter,
}) {
  const change = useCallback(({ target }) => onChange(target.value), [
    onChange,
  ]);

  const classes = cn(
    'gem-dropdown',
    { 'gem-dropdown-disabled': disabled },
    className
  );

  const selectClasses = cn('gem-dropdown-select', {
    'gem-dropdown-hidden': !!children,
  });

  const items = options.map(formatItem);
  const selected = items.find((x) => `${x.value}` === `${value}`);

  return (
    <div className={classes}>
      {children({
        value,
        formatted: formatter(selected ? selected.label : ''),
      })}
      <select
        disabled={disabled}
        className={selectClasses}
        value={value}
        onChange={change}
      >
        {nullValue && (
          <option value="" disabled>
            {nullValue}
          </option>
        )}
        {items.map((option) => (
          <option key={option.value} value={option.value}>
            {formatter(option.label)}
          </option>
        ))}
      </select>
    </div>
  );
}

DropdownBase.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  nullValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  formatter: PropTypes.func,
};

DropdownBase.defaultProps = {
  className: null,
  nullValue: null,
  value: '',
  disabled: false,
  formatter: (value) => value,
};
