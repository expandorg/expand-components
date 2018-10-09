import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
    report: ['Image is not loading'],
    editor: {
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
