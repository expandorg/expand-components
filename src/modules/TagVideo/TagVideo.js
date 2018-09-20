import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '../../common/validation';

import UITagVideo from './tagging/TagVideo';

import styles from './TagVideo.module.styl';

export default class TagVideo extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(
      PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        tag: PropTypes.string,
      })
    ),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: [],
  };

  static module = {
    type: 'tagVideo',
    validation: {
      isRequired: rules.isRequiredArray,
      isNotEmpty: rules.isRequiredArray,
    },
    report: ['video is not loading'],
    editor: {
      defaults: {
        src: 'https://www.youtube.com/watch?v=PXi3Mv6KMzY',
      },
    },
  };

  handleChange = tags => {
    const { name, onChange } = this.props;
    onChange(name, tags);
  };

  render() {
    const { src, value } = this.props;

    return (
      <div className={styles.container}>
        <UITagVideo
          key={src}
          video={src}
          tags={value}
          className={styles.video}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
