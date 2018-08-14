import React from 'react';

export default function SvgIcon({ children, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...rest}>
      {children}
    </svg>
  );
}
