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
    height: PropTypes.number,
    width: PropTypes.number,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: null,
    subtitles: null,
    autoPlay: false,
    loop: false,
    height: undefined,
    width: undefined,
    muted: false,
    playerControls: true,
    justify: 'center',
  };

  constructor(props) {
    super(props);
    this.player = createRef();

    this.state = {
      loadError: false,
    };
  }

  handleError = () => {
    this.setState({ loadError: true });
  };

  render() {
    const {
      className,
      src,
      subtitles,
      height,
      width,
      autoPlay,
      loop,
      muted,
      justify,
      playerControls,
    } = this.props;

    const { loadError } = this.state;
    /* eslint-disable jsx-a11y/media-has-caption */
    return (
      <Alignment justify={justify} className={styles.container} padding="small">
        <div className={styles.content}>
          {!loadError && (
            <video
              key={src}
              height={height}
              width={width}
              className={cn(styles.video, className)}
              controls={playerControls}
              autoPlay={autoPlay}
              loop={loop}
              ref={this.player}
              muted={muted}
              preload="auto"
            >
              <source src={src} type="video/mp4" onError={this.handleError} />
              {subtitles && (
                <track default kind="subtitles" srcLang="en" src={subtitles} />
              )}
            </video>
          )}
          {loadError && <div className={styles.error}>Video loading error</div>}
        </div>
      </Alignment>
    );
  }
}
