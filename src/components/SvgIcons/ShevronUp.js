import React from 'react';
import SvgIcon from './SvgIcon';

const ShevronUp = ({ ...rest }) => (
  <SvgIcon width="16" height="8" viewBox="0 0 16 8" {...rest}>
    <path d="M0.5 8L8 0.5L15.5 8H0.5Z" />
  </SvgIcon>
);

export default ShevronUp;
