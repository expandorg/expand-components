import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Paragraph.module.styl';

export default class Paragraph extends Component {
  static propTypes = {
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['small', 'medium']),
    centered: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    fontSize: 'small',
    centered: false,
  };

  render() {
    const { children, className, fontSize, centered } = this.props;
    const classes = cn(
      styles.p,
      styles[`${fontSize}Font`],
      {
        [styles.center]: centered,
      },
      className
    );
    return <p className={classes}>{children}</p>;
  }
}
