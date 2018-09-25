import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Cursor.module.styl';

export default class Cursor extends Component {
  static propTypes = {
    left: PropTypes.number,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    left: 0,
    onClick: Function.prototype,
  };

  handleClick = evt => {
    const { left, onClick } = this.props;
    onClick(evt, left);
  };

  render() {
    const { left } = this.props;
    return (
      <ins
        onClick={this.handleClick}
        style={{ left }}
        className={styles.cursor}
      />
    );
  }
}
