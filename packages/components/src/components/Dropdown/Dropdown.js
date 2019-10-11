import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DropdownBase from './DropdownBase';
import TooltipIcon from '../common/TooltipIcon';
import InputLabel from '../common/InputLabel';
import InputIconsContainer from '../common/InputIconsContainer';
import ArrowDownIcon from '../common/ArrowDownIcon';

import './Dropdown.styl';

export default function Dropdown({
  className,
  options,
  value,
  label,
  nullValue,
  onChange,
  tooltip,
  tooltipPosition,
  tooltipOrientation,
  theme,
  formatter,
}) {
  const change = useCallback(v => onChange(v), [onChange]);

  return (
    <DropdownBase
      options={options}
      value={value}
      nullValue={nullValue}
      onChange={change}
      formatter={formatter}
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
          <InputIconsContainer theme={theme}>
            <ArrowDownIcon theme={theme} />
            {tooltip && (
              <TooltipIcon
                tooltip={tooltip}
                p
                position={tooltipPosition}
                orientation={tooltipOrientation}
              />
            )}
          </InputIconsContainer>
        </div>
      )}
    </DropdownBase>
  );
}

Dropdown.propTypes = {
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
  formatter: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: undefined,
  className: null,
  tooltip: null,
  nullValue: null,
  tooltipPosition: undefined,
  tooltipOrientation: undefined,
  theme: 'default',
  options: [],
  label: null,
  formatter: value => value,
};
