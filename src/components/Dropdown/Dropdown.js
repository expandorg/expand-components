import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Dropdown.styl';

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
    return (
      <div
        className={cn(
          'gem-dropdown',
          { 'gem-dropdown-disabled': disabled },
          className
        )}
      >
        {children({ value, formatted: formatter(value) })}
        <select
          disabled={disabled}
          className={cn('gem-dropdown-select', {
            'gem-dropdown-hidden': !!children,
          })}
          value={value}
          onChange={this.handleChange}
        >
          {options.map(option => (
            <option key={`${option}`} value={option}>
              {formatter(option)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
