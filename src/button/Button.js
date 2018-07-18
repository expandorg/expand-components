import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.module.styl';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    theme: PropTypes.oneOf([
      'pink',
      'white',
      'transparent',
      'aqua',
      'blue',
      'blueTransparent',
      'link',
    ]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    className: null,
    disabled: false,
    theme: 'pink',
    size: 'medium',
    type: 'button',
  };

  render() {
    const {
      children,
      className,
      theme,
      size,
      disabled,
      type,
      onClick,
    } = this.props;

    const classes = cn(
      styles.button,
      styles[`${theme}Theme`],
      styles[`${size}Size`],
      className
    );

    return (
      <button
        className={classes}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    );
  }
}
