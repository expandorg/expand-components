import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Paragraph from '../Paragraph';

import styles from './Description.module.styl';

export default class Description extends Component {
  static propTypes = {
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  static defaultProps = {
    className: null,
    fontSize: 'medium',
  };

  render() {
    const { content, className, fontSize } = this.props;
    const classes = cn(styles.content, styles[`${fontSize}Font`], className);
    return <Paragraph className={classes} centered content={content} />;
  }
}
