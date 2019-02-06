import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Font.module.styl';

export const Font = ({ preset, settings }) => (
  <div className={styles.container}>
    <div className={cn(styles.font, styles[preset])}>{preset}</div>
    <div className={styles.settings}>{settings}</div>
  </div>
);

Font.propTypes = {
  preset: PropTypes.string.isRequired,
  settings: PropTypes.string.isRequired,
};

export default Font;
