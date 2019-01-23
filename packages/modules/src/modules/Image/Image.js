import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Image.module.styl';

export default class Image extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  static module = {
    type: 'image',
    name: 'Image',
    report: ['Image is not loading'],
    editor: {
      category: ModuleCategories.Image,
      properties: {
        src: {
          type: PropControlTypes.string,
          placeholder: 'Image Url',
          required: true,
        },
      },
      defaults: {
        src: 'https://expand.org/images/image-annotation.png',
      },
    },
  };

  render() {
    const { src, name } = this.props;
    return (
      <div className={styles.container}>
        <img className={styles.img} src={src} alt={name} />
      </div>
    );
  }
}
