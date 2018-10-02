import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignleTagVideo from './tagging/SignleTagVideo';

import styles from './TagVideo.module.styl';

export default class TagVideo extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
  };

  static module = {
    type: 'tagVideo',
    validation: {
      isRequired: value => {
        if (!value) {
          return false;
        }
        if (!value.tag) {
          return false;
        }
        return true;
      },
    },
    report: ['video is not loading'],
    editor: {
      defaults: {
        src: 'https://www.youtube.com/watch?v=PXi3Mv6KMzY',
      },
    },
  };

  handleChange = tag => {
    const { name, onChange } = this.props;
    onChange(name, tag);
  };

  render() {
    const { src, value } = this.props;

    return (
      <div className={styles.container}>
        <SignleTagVideo
          key={src}
          video={src}
          tag={value}
          className={styles.video}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
