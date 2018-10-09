import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './ErrorMessage.module.styl';

export default class ErrorMessage extends Component {
  static propTypes = {
    error: PropTypes.shape({}),
    field: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    field: 'commonMessage',
    error: null,
    className: null,
  };

  render() {
    const { error, className, field } = this.props;
    const errorMessage = error && error[field];
    if (!errorMessage) {
      return null;
    }
    return (
      <div className={cn(styles.container, className)}>{errorMessage}</div>
    );
  }
}
