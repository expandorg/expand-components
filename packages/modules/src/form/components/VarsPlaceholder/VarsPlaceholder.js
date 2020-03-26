import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { useVarsPreviewContext } from './VarsPreviewContext';

import './VarsPlaceholder.styl';

const getVariableName = (def) => def.slice(2, def.length - 1);

const isVariable = (str) =>
  typeof str === 'string' && str.startsWith('$(') && str.endsWith(')');

function VarsPlaceholder({ vval, pos, vcn }) {
  const isModulePreview = useVarsPreviewContext();
  if (!isModulePreview || !isVariable(vval)) {
    return null;
  }
  const classes = cn('gem-varsplaceholder', `gem-varsplaceholder__${pos}`, vcn);
  return <div className={classes}>{getVariableName(vval)}</div>;
}

VarsPlaceholder.propTypes = {
  vval: PropTypes.any, // eslint-disable-line
  vcn: PropTypes.string,
  pos: PropTypes.oneOf(['fill', 'left', 'center']),
};

VarsPlaceholder.defaultProps = {
  vval: null,
  vcn: null,
  pos: 'fill',
};

export default memo(VarsPlaceholder);
