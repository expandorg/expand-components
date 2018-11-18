import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Image.module.styl';

export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  static module = {
    type: 'image',
    name: 'Image',
    report: ['Image is not loading'],
    editor: {
      catogory: ModuleCategories.Image,
      properties: {
        src: {
          type: PropControlTypes.string,
          placeholder: 'Image Url',
          required: true,
        },
      },
      defaults: {
        src: 'https://portal.gems.org/images/complete-tasks.png',
      },
    },
  };

  render() {
    const { src, className } = this.props;
    return (
      <div
        className={cn(styles.img, className)}
        style={{ backgroundImage: `url('${src}')` }}
      />
    );
  }
}
