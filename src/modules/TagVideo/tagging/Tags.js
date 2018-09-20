import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Tags.module.styl';

export default class Tags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        tag: PropTypes.string,
      })
    ),
  };

  static defaultProps = {
    tags: [],
  };

  render() {
    const { tags } = this.props;
    return <div className={styles.container} />;
  }
}
