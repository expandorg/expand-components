import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './MediaTooltip.module.styl';

export default class MediaTooltip extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      .isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { content, className } = this.props;
    if (typeof content === 'string') {
      return <span className={cn(styles.text, className)}>{content}</span>;
    }
    switch (content.type) {
      case 'video':
        return (
          <div className={cn(styles.contentVideo, className)}>
            <video
              key={content.src}
              className={cn(styles.video, className)}
              autoPlay
              loop
              muted
              preload="auto"
            >
              <source src={content.src} type="video/mp4" />
            </video>
            {content.message && (
              <div className={cn(styles.text)}>{content.message}</div>
            )}
          </div>
        );
      case 'image': {
        return (
          <div className={cn(styles.contentImage, className)}>
            <img
              src={content.src}
              className={cn(styles.image, className)}
              alt={content.message}
            />
            {content.message && (
              <div className={cn(styles.text)}>{content.message}</div>
            )}
          </div>
        );
      }
      default:
        break;
    }
    return content;
  }
}
