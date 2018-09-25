import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../../../../components/Tooltip';

import styles from './Progress.module.styl';

class Progress extends Component {
  static propTypes = {
    duration: PropTypes.number,
    seek: PropTypes.number,
  };

  static defaultProps = {
    duration: 0,
    seek: 0,
  };

  render() {
    const { duration, seek, children, ...rest } = this.props;
    if (!duration) {
      return null;
    }
    const left = `${(seek / duration) * 100}%`;
    return (
      <div style={{ left }} className={styles.seek} {...rest}>
        {children}
      </div>
    );
  }
}

export default Tooltip(Progress);
