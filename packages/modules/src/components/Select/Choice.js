import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as Checkmark } from '@expandorg/uikit/assets/checkmark-3.svg';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import styles from './Choice.module.styl';

export default function Choice({
  option,
  selected,
  readOnly,
  checkMark,
  onSelect,
}) {
  const select = useCallback(
    evt => {
      evt.preventDefault();
      if (!readOnly) {
        onSelect(option.value);
      }
    },
    [onSelect, option.value, readOnly]
  );

  const classes = cn(styles.container, {
    [styles.selected]: selected,
    [styles.readOnly]: readOnly,
  });

  const { id, caption } = option;
  return (
    <button type="button" className={classes} onClick={select}>
      {id && !checkMark && <span className={styles.id}>{id}</span>}
      {checkMark && (
        <div className={styles.mark}>
          <Checkmark
            width="20"
            height="20"
            viewBox="0 0 64 48"
            className={styles.icon}
          />
        </div>
      )}
      <span className={styles.caption}>
        {caption}
        <VarsPlaceholder vval={caption} />
      </span>
    </button>
  );
}

Choice.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    caption: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  selected: PropTypes.bool,
  checkMark: PropTypes.bool,
  readOnly: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

Choice.defaultProps = {
  checkMark: false,
  readOnly: false,
  selected: false,
};
