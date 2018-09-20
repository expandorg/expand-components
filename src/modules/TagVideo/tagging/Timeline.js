import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Timeline.module.styl';

const Seek = ({ duration, seek }) => {
  if (!duration) {
    return null;
  }
  const left = `${(100 * seek) / duration}%`;
  return <div style={{ left }} className={styles.seek} />;
};

export default class Timeline extends Component {
  static propTypes = {
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number,
      tag: PropTypes.string,
    }),
    duration: PropTypes.number,
    seek: PropTypes.number,
  };

  static defaultProps = {
    duration: 0,
    tag: null,
    seek: 0,
  };

  render() {
    const { duration, seek, tag } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.slider}>
          <Seek duration={duration} seek={seek} />
        </div>
      </div>
    );
  }
}
