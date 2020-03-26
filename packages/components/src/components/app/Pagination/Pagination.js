import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as Arrow } from '@expandorg/uikit/assets/arrow-2.svg';

import PageNumber from './PageNumber';
import getPages from './getPages';

import styles from './Pagination.module.styl';

export default function Pagination({
  onChange,
  current,
  total,
  display,
  className,
}) {
  const click = useCallback(
    (page, disabled, evt) => {
      evt.preventDefault();
      if (!disabled) {
        onChange(page);
      }
    },
    [onChange]
  );

  const pages = useMemo(() => getPages(current, total, display), [
    current,
    display,
    total,
  ]);
  if (!total || total === 1) {
    return null;
  }

  return (
    <div className={cn(styles.container, className)}>
      <PageNumber page={0} disabled={current === 0} onClick={click}>
        <Arrow className={styles.left} />
        <Arrow className={styles.left} />
      </PageNumber>
      <PageNumber page={current - 1} disabled={current === 0} onClick={click}>
        <Arrow className={styles.left} />
      </PageNumber>
      {pages.map((p) => (
        <PageNumber key={p} page={p} active={p === current} onClick={click}>
          {p + 1}
        </PageNumber>
      ))}
      <PageNumber
        page={current + 1}
        disabled={current === total - 1}
        onClick={click}
      >
        <Arrow className={styles.right} />
      </PageNumber>
      <PageNumber
        page={total - 1}
        disabled={current === total - 1}
        onClick={click}
      >
        <Arrow className={styles.right} />
        <Arrow className={styles.right} />
      </PageNumber>
    </div>
  );
}

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  display: PropTypes.number,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  className: null,
  current: 0,
  total: 0,
  display: 5,
};
