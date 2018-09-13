import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './Label.module.styl';

export default class Label extends Component {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    className: null,
  };

  render() {
    const { label, className, children } = this.props;
    return (
      <div className={cn(styles.container, className)}>
        {label && <div className={styles.label}>{label}</div>}
        {children}
      </div>
    );
  }
}
