import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Actions from './Actions';
import { getHintPositionByOrientation } from '../positioning';

import styles from './Hint.module.styl';

export default function Hint(props) {
  if (!props.position) {
    return null;
  }
  const item = props.settings[props.active];
  return (
    <div
      style={getHintPositionByOrientation(props.position, item.orientation)}
      className={styles.container}
    >
      <div className={cn(styles.hint, styles[item.orientation])}>
        <div>{item.hint}</div>
        <Actions {...props} />
      </div>
    </div>
  );
}

Hint.propTypes = {
  settings: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  active: PropTypes.string,
  position: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }),
  onActiveChange: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

Hint.defaultProps = {
  position: null,
  active: null,
};
