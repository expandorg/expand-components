import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from '@expandorg/components';

import styles from './Validation.module.styl';

export default class Validation extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.shape({}),
  };

  static defaultProps = {
    error: null,
  };

  render() {
    const { children, name, error } = this.props;
    return (
      <div className={styles.container}>
        {children}
        <ErrorMessage field={name} error={error} className={styles.error} />
      </div>
    );
  }
}
