import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Cursor.module.styl';
import Tooltip from '../../../../components/Tooltip';

class Cursor extends Component {
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

export default Tooltip(Cursor);
