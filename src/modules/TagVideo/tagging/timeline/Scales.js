import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Scales.module.styl';

export default class Scales extends Component {
  static propTypes = {
    width: PropTypes.number,
    duration: PropTypes.number,
  };

  static defaultProps = {
    duration: 0,
    width: 0,
  };

  render() {
    const { width, duration } = this.props;
    if (!duration || !width) {
      return null;
    }
    return (
      <div className={styles.container}>
        <span className={styles.tick}>00:05</span>
        <span className={styles.tick}>00:10</span>
        <span className={styles.tick}>00:15</span>
        <span className={styles.tick}>00:20</span>
      </div>
    );
  }
}
