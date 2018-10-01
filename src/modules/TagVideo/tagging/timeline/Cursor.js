import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Cursor.module.styl';

export default class Cursor extends Component {
  static propTypes = {
    left: PropTypes.number,
    label: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    left: 0,
    label: null,
    onClick: Function.prototype,
  };

  handleClick = evt => {
    const { left, onClick } = this.props;
    onClick(left, evt);
  };

  render() {
    const { left, label } = this.props;
    return (
      <div
        onClick={this.handleClick}
        style={{ left: left - 1 }}
        className={styles.cursor}
      >
        {label && <span className={styles.label}>{label}</span>}
      </div>
    );
  }
}
