import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../components/ErrorMessage';

import styles from './FieldContainer.module.styl';

export default class FieldContainer extends PureComponent {
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
