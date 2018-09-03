import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ArrowDown } from '../../components/SvgIcons';

import styles from './DropdownContent.module.styl';

export default class Dropdown extends Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    value: null,
    placeholder: null,
  };

  render() {
    const { value, placeholder } = this.props;
    return (
      <div className={styles.content}>
        {value ? (
          <div className={styles.value}>{value}</div>
        ) : (
          <div className={styles.placeholder}>{placeholder}</div>
        )}
        <div className={styles.shevron}>
          <ArrowDown />
        </div>
      </div>
    );
  }
}
