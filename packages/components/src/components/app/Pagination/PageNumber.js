import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Pagination.module.styl';

export default function PageNumber({
  page,
  onClick,
  children,
  active,
  disabled,
}) {
  return (
    <button
      className={cn(styles.page, {
        [styles.active]: active,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      onClick={(evt) => onClick(page, disabled, evt)}
    >
      {children}
    </button>
  );
}

PageNumber.propTypes = {
  page: PropTypes.number.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

PageNumber.defaultProps = {
  disabled: false,
  active: false,
  onClick: undefined,
};
