import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Hamburger.module.styl';

export default class Hamburger extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  render() {
    const { active, onToggle, className } = this.props;
    return (
      <button
        data-collapse
        className={cn(styles.toggle, { [styles.active]: active }, className)}
        onClick={onToggle}
      >
        <span className={styles.icon} />
      </button>
    );
  }
}
