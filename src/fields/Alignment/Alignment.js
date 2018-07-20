import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Alignment.module.styl';

export default class Alignment extends Component {
  static propTypes = {
    justify: PropTypes.oneOf(['left', 'right', 'center', 'between']),
    padding: PropTypes.oneOf(['small', 'medium', 'none']),
    vertical: PropTypes.bool,
    vCenter: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    justify: 'left',
    padding: 'none',
    className: null,
    vertical: false,
    vCenter: false,
  };

  render() {
    const {
      children,
      justify,
      padding,
      className,
      vertical,
      vCenter,
    } = this.props;
    const classes = cn(
      styles.container,
      styles[`${justify}Justify`],
      styles[`${padding}Padding`],
      {
        [styles.horizontal]: !vertical,
        [styles.vertical]: vertical,
        [styles.va]: vCenter,
      },
      className
    );
    return <div className={classes}>{children}</div>;
  }
}
