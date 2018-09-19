import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';

import Alignment from '../Alignment';

import styles from './TagVideo.module.styl';

export default class TagVideo extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  static module = {
    type: 'tagVideo',
    report: ['video is not loading'],
    editor: {
      defaults: {
        src: 'https://www.youtube.com/watch?v=yCu3X1Ft-vU',
      },
    },
  };

  playerRef = createRef();

  render() {
    const { src } = this.props;

    return (
      <Alignment justify="center" className={styles.container} padding="small">
        <div className={styles.content}>
          <ReactPlayer url={src} controls ref={this.playerRef} />
        </div>
      </Alignment>
    );
  }
}
