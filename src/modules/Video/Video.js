import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Alignment from '../Alignment';

import styles from './Video.module.styl';

export default class Video extends Component {
  static propTypes = {
    className: PropTypes.string,
    subtitles: PropTypes.string,
    playerControls: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    justify: PropTypes.oneOf(['left', 'right', 'center', 'between']),
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: null,
    subtitles: null,
    autoPlay: false,
    loop: false,
    muted: false,
    playerControls: true,
    justify: 'center',
  };

  constructor(props) {
    super(props);
    this.player = createRef();
  }

  render() {
    const {
      className,
      src,
      subtitles,
      autoPlay,
      loop,
      muted,
      justify,
      playerControls,
    } = this.props;

    /* eslint-disable jsx-a11y/media-has-caption */
    return (
      <Alignment justify={justify} className={styles.container} padding="small">
        <video
          key={src}
          className={cn(styles.video, className)}
          controls={playerControls}
          autoPlay={autoPlay}
          loop={loop}
          ref={this.player}
          muted={muted}
          preload
        >
          <source src={src} type="video/mp4" />
          {subtitles && (
            <track default kind="subtitles" srcLang="en" src={subtitles} />
          )}
        </video>
      </Alignment>
    );
  }
}
