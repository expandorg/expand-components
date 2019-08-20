import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Arrow } from '@expandorg/uikit/assets/arrow-2.svg';

import Button from '../../../Button';

import { findNext, findPrev } from '../settings';

import styles from './Hint.module.styl';

export default function Actions({
  settings,
  active,
  onHide,
  presence,
  onActiveChange,
}) {
  const prev = useCallback(() => {
    onActiveChange(findPrev(active, settings, presence));
  }, [active, onActiveChange, presence, settings]);

  const next = useCallback(() => {
    onActiveChange(findNext(active, settings, presence));
  }, [active, onActiveChange, presence, settings]);

  return (
    <div className={styles.actionsConatainer}>
      <Button onClick={onHide} className={styles.done} theme="grey">
        Done
      </Button>
      <div>
        <Button onClick={prev} className={styles.prev} theme="grey">
          <Arrow />
        </Button>
        <Button onClick={next} className={styles.next} theme="grey">
          <Arrow />
        </Button>
      </div>
    </div>
  );
}

Actions.propTypes = {
  settings: PropTypes.shape({
    order: PropTypes.number,
    orientation: PropTypes.string,
    hint: PropTypes.string,
  }).isRequired,

  active: PropTypes.string,

  presence: PropTypes.arrayOf(PropTypes.string),

  onActiveChange: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

Actions.defaultProps = {
  active: null,
  presence: [],
};
