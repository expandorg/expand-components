import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import { ReactComponent as ArrowDown } from '@expandorg/uikit/assets/arrow-down.svg';

import { InputLabel } from '../Input';
import DropdownBase from './DropdownBase';

import './Dropdown.styl';

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nullValue: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ),
    theme: PropTypes.oneOf(['default', 'white']),
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: undefined,
    className: null,
    nullValue: null,
    theme: 'default',
    options: [],
    label: null,
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { className, options, value, label, nullValue, theme } = this.props;

    return (
      <DropdownBase
        options={options}
        value={value}
        nullValue={nullValue}
        onChange={this.handleChange}
        className={cn(`gem-dropdown-theme-${theme}`, className)}
      >
        {({ formatted }) => (
          <div
            className={cn('gem-dropdown-content', {
              'gem-dropdown-content-val': formatted,
            })}
          >
            <InputLabel placeholder={label} />
            {formatted}
            <ArrowDown className="gem-dropdown-arrow" />
          </div>
        )}
      </DropdownBase>
    );
  }
}
