import React from 'react';
import SvgIcon from './SvgIcon';

const ShevronDown = ({ ...rest }) => (
  <SvgIcon width="16" height="8" viewBox="0 0 16 8" {...rest}>
    <path d="M0.5 0L8 7.5L15.5 0H0.5Z" />
  </SvgIcon>
);

export default ShevronDown;
