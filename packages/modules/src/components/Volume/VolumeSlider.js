import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Slider, clickOutside } from '@expandorg/components';

import styles from './VolumeSlider.module.styl';

export class VolumeSlider extends Component {
  static propTypes = {
    volume: PropTypes.number,
    forwardedRef: PropTypes.object,  // eslint-disable-line
    onHide: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    volume: 0,
  };

  timeoutId = null;

  componentWillUnmount() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
  }

  handleClickOutside = () => {
    this.timeoutId = setTimeout(() => {
      this.timeoutId = null;
      const { onHide } = this.props;
      onHide();
    });
  };

  render() {
    const { volume, onChange, forwardedRef } = this.props;

    return (
      <div className={styles.container} ref={forwardedRef}>
        <Slider
          className={styles.slider}
          vertical
          max={1}
          value={volume}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default clickOutside(VolumeSlider);
