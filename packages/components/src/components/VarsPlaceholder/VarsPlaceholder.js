import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './VarsPlaceholder.styl';

const getVariableName = def => def.slice(2, def.length - 1);

const isVariable = str =>
  typeof str === 'string' && str.startsWith('$(') && str.endsWith(')');

function VarsPlaceholder({ vval, isModulePreview, inline, vcn }) {
  if (!isModulePreview || !isVariable(vval)) {
    return null;
  }
  const classes = cn(
    'gem-varsplaceholder',
    {
      'gem-varsplaceholder__inline': inline,
    },
    vcn
  );
  return <div className={classes}>{getVariableName(vval)}</div>;
}

VarsPlaceholder.propTypes = {
  vval: PropTypes.any, // eslint-disable-line
  vcn: PropTypes.string,
  isModulePreview: PropTypes.bool,
  inline: PropTypes.bool,
};

VarsPlaceholder.defaultProps = {
  vval: null,
  vcn: null,
  isModulePreview: false,
  inline: false,
};

export default memo(VarsPlaceholder);
