import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './DropdownBase.styl';

const formatItem = option => {
  if (typeof option === 'string' || typeof option === 'number') {
    return { value: option, label: option };
  }
  return option;
};

export default class DropdownBase extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nullValue: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    formatter: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    nullValue: null,
    value: '',
    disabled: false,
    formatter: value => value,
  };

  handleChange = ({ target }) => {
    const { onChange } = this.props;
    onChange(target.value);
  };

  render() {
    const {
      value,
      options,
      className,
      children,
      disabled,
      nullValue,
      formatter,
    } = this.props;

    const classes = cn(
      'gem-dropdown',
      { 'gem-dropdown-disabled': disabled },
      className
    );

    const selectClasses = cn('gem-dropdown-select', {
      'gem-dropdown-hidden': !!children,
    });

    const items = options.map(formatItem);
    const selected = items.find(x => `${x.value}` === `${value}`);

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
          onChange={this.handleChange}
        >
          {nullValue && <option value="">{nullValue}</option>}
          {items.map(option => (
            <option key={option.value} value={option.value}>
              {formatter(option.label)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
