import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// eslint-disable-next-line import/no-named-as-default
import Input from './Input';
import ClipboardButton from '../ClipboardButton';
import InputIconsContainer from '../common/InputIconsContainer';
import TooltipIcon from '../common/TooltipIcon';

import './IconInput.styl';

export function IconInput({
  children,
  value,
  className,
  tooltip,
  tooltipPosition,
  tooltipOrientation,
  copy,
  ...rest
}) {
  return (
    <Input className={cn('gem-iconinput', className)} value={value} {...rest}>
      {children}
      <InputIconsContainer className="gem-iconinput-icons">
        {copy && (
          <ClipboardButton className="gem-iconinput-copy" value={value}>
            Copy
          </ClipboardButton>
        )}
        {tooltip && (
          <TooltipIcon
            tooltip={tooltip}
            position={tooltipPosition}
            orientation={tooltipOrientation}
          />
        )}
      </InputIconsContainer>
    </Input>
  );
}

IconInput.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  tooltip: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  tooltipPosition: PropTypes.string,
  tooltipOrientation: PropTypes.string,
  copy: PropTypes.bool,
};

IconInput.defaultProps = {
  className: null,
  value: undefined,
  tooltip: null,
  tooltipPosition: undefined,
  tooltipOrientation: undefined,
  copy: false,
};

/* eslint-disable */
export default forwardRef((props, ref) => (
  <IconInput {...props} forwardedRef={ref} />
));
