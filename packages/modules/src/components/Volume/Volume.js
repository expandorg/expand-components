import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as VolumeIcon } from '@expandorg/uikit/assets/volume.svg';

import VolumeSlider from './VolumeSlider';

import styles from './Volume.module.styl';

export default class Volume extends Component {
  static propTypes = {
    volume: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    volume: 0,
  };

  state = {
    opened: false,
  };

  handleToggle = evt => {
    evt.preventDefault();
    this.setState(({ opened }) => ({ opened: !opened }));
  };

  handleHide = () => {
    this.setState({ opened: false });
  };

  render() {
    const { volume, onChange } = this.props;
    const { opened } = this.state;

    return (
      <div className={styles.container}>
        <button
          className={cn(styles.button, { [styles.opened]: opened })}
          onClick={this.handleToggle}
        >
          <VolumeIcon
            className={styles.icon}
            viewBox="0 0 576 512"
            widht="15px"
            height="15px"
          />
        </button>
        {opened && (
          <VolumeSlider
            onHide={this.handleHide}
            volume={volume}
            onChange={onChange}
          />
        )}
      </div>
    );
  }
}
