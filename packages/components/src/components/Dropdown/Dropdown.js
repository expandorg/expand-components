import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import DropdownBase from './DropdownBase';

import './Dropdown.styl';

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ),
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: undefined,
    className: null,
    options: [],
    label: null,
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { className, options, value, label } = this.props;
    return (
      <DropdownBase
        options={options}
        value={value}
        onChange={this.handleChange}
        className={className}
      >
        {({ formatted }) => (
          <div
            className={cn('gem-dropdown-content', {
              'gem-dropdown-content-val': formatted,
            })}
          >
            {label && <div className="gem-dropdown-content-label">{label}</div>}
            {formatted}
          </div>
        )}
      </DropdownBase>
    );
  }
}
