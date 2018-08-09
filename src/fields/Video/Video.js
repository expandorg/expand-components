import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Alignment from '../Alignment';

import styles from './Video.module.styl';

export default class Video extends Component {
  static propTypes = {
    className: PropTypes.string,
    subtitles: PropTypes.string,
    justify: PropTypes.oneOf(['left', 'right', 'center', 'between']),
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: null,
    subtitles: null,
    justify: 'center',
  };

  render() {
    const { className, src, subtitles, justify } = this.props;

    /* eslint-disable jsx-a11y/media-has-caption */
    return (
      <Alignment justify={justify}>
        <video
          className={cn(styles.video, className)}
          controls=""
          autoPlay=""
          name="media"
        >
          <source src={src} type="video/mp4" />
          {subtitles && (
            <track default kind="subtitles" srcLang="en" src={src} />
          )}
        </video>
      </Alignment>
    );
  }
}
