import React from 'react';
import PropTypes from 'prop-types';

import { useTooltip } from '../Tooltip';

import { ReactComponent as Icon } from './tooltip.svg';

import './TooltipIcon.styl';

export default function TooltipIcon({ tooltip, position, orientation }) {
  const [props, visible, ttcn] = useTooltip(orientation, position);

  if (!tooltip) {
    return null;
  }
  return (
    <span className="gem-input-tooltip" {...props}>
      <Icon className="gem-input-tooltip-icon" />
      {visible && <div className={ttcn}>{tooltip}</div>}
    </span>
  );
}

TooltipIcon.propTypes = {
  tooltip: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  position: PropTypes.string,
  orientation: PropTypes.string,
};

TooltipIcon.defaultProps = {
  tooltip: null,
  position: 'center',
  orientation: 'top',
};
