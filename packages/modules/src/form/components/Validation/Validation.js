import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from '@expandorg/components';

import styles from './Validation.module.styl';

export default class Validation extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    errors: PropTypes.shape({}),
  };

  static defaultProps = {
    errors: null,
  };

  render() {
    const { children, name, errors } = this.props;
    return (
      <div className={styles.container}>
        {children}
        <ErrorMessage field={name} errors={errors} className={styles.error} />
      </div>
    );
  }
}
