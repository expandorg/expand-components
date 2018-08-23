import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Dropdown.styl';

const formatItem = option => {
  if (typeof option === 'string') {
    return { value: option, label: option };
  }
  return option;
};

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    formatter: PropTypes.func,
  };

  static defaultProps = {
    className: null,
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
