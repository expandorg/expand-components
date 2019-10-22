import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from '@expandorg/components';

import styles from './Validation.module.styl';

export default function Validation({ children, name, errors }) {
  return (
    <div className={styles.container}>
      {children}
      <ErrorMessage field={name} errors={errors} className={styles.error} />
    </div>
  );
}

Validation.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape({}),
};

Validation.defaultProps = {
  errors: null,
};
