import React from 'react';
import PropTypes from 'prop-types';

export default function Iframe({
  src,
  width,
  height,
  title,
  className,
  ...rest
}) {
  if (!src) {
    return null;
  }

  return (
    <iframe
      title={title}
      className={className}
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      {...rest}
    />
  );
}

Iframe.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Iframe.defaultProps = {
  className: null,
  src: null,
  title: '',
  width: '100%',
  height: '100%',
};
