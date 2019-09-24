import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import { ReactComponent as ArrowDown } from '@expandorg/uikit/assets/arrow-down.svg';

import { InputLabel } from '../Input';
import DropdownBase from './DropdownBase';
import TooltipIcon from '../Input/TooltipIcon';

import './Dropdown.styl';

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nullValue: PropTypes.string,
    tooltip: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    tooltipPosition: PropTypes.string,
    tooltipOrientation: PropTypes.string,
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
    tooltip: null,
    nullValue: null,
    tooltipPosition: undefined,
    tooltipOrientation: undefined,
    theme: 'default',
    options: [],
    label: null,
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const {
      className,
      options,
      value,
      label,
      nullValue,
      tooltip,
      tooltipPosition,
      tooltipOrientation,
      theme,
    } = this.props;

    return (
      <DropdownBase
        options={options}
        value={value}
        nullValue={nullValue}
        onChange={this.handleChange}
        className={cn(
          `gem-dropdown-theme-${theme}`,
          { 'gem-dropdown--tooltip': !!tooltip },
          className
        )}
      >
        {({ formatted }) => (
          <div
            className={cn('gem-dropdown-content', {
              'gem-dropdown-content-val': formatted,
            })}
          >
            <InputLabel placeholder={label} />
            {formatted}
            <div className="gem-dropdown-content-icons">
              <ArrowDown className="gem-dropdown-content-arrow" />
              {tooltip && (
                <TooltipIcon
                  tooltip={tooltip}
                  p
                  position={tooltipPosition}
                  orientation={tooltipOrientation}
                />
              )}
            </div>
          </div>
        )}
      </DropdownBase>
    );
  }
}
