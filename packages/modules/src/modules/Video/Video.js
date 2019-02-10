import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Video.module.styl';

export default class Video extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    subtitles: PropTypes.string,
    playerControls: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    src: PropTypes.string.isRequired,
    onModuleError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    subtitles: null,
    autoPlay: false,
    loop: false,
    height: undefined,
    width: undefined,
    muted: false,
    playerControls: true,
  };

  static module = {
    type: 'video',
    name: 'Video',
    report: ['video is not loading'],
    editor: {
      category: ModuleCategories.Media,
      properties: {
        src: {
          type: PropControlTypes.string,
          placeholder: 'Video src',
          required: true,
        },
        subtitles: {
          type: PropControlTypes.string,
          placeholder: 'Subtitles src',
        },
        playerControls: {
          type: PropControlTypes.boolean,
          label: 'Show player controls',
        },
        autoPlay: {
          type: PropControlTypes.boolean,
          label: 'play video automatically',
        },
        loop: {
          type: PropControlTypes.boolean,
          label: 'Loop video',
        },
        muted: {
          type: PropControlTypes.string,
          label: 'Muted',
        },
      },
      defaults: {
        src: 'http://media.gettyimages.com/videos/cap-video-id896606100',
      },
    },
  };

  constructor(props) {
    super(props);
    this.player = createRef();

    this.state = {
      loadError: false,
    };
  }

  handleError = () => {
    const { onModuleError, name, src } = this.props;
    this.setState({ loadError: true });
    onModuleError(`${name}: Error while loading video ${src}`);
  };

  render() {
    const {
      src,
      subtitles,
      height,
      width,
      autoPlay,
      loop,
      muted,
      playerControls,
    } = this.props;

    const { loadError } = this.state;
    /* eslint-disable jsx-a11y/media-has-caption */
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {!loadError && (
            <video
              key={src}
              height={height}
              width={width}
              className={cn(styles.video)}
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
      </div>
    );
  }
}
