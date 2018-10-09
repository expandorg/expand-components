import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { clickOutside } from '@gemsorg/components/hoc';

import styles from './Menu.module.styl';

class Menu extends Component {
  static propTypes = {
    forwardedRef: PropTypes.object, // eslint-disable-line
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  handleClickOutside = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    const { onHide } = this.props;
    onHide();
  };

  handlePick = (evt, item) => {
    evt.preventDefault();
    const { onHide, onSelect } = this.props;
    onHide();
    onSelect(item);
  };

  render() {
    const { forwardedRef, items } = this.props;
    return (
      <div className={styles.container} ref={forwardedRef}>
        <ul className={styles.menu}>
          {items.map(item => (
            <li key={item} className={styles.item}>
              <button
                className={styles.button}
                onClick={evt => this.handlePick(evt, item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default clickOutside(Menu);
