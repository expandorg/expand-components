import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.styl';

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    theme: PropTypes.oneOf([
      'pink',
      'white',
      'transparent',
      'aqua',
      'blue',
      'link',
      'none',
    ]),
  };

  static defaultProps = {
    className: null,
    theme: 'pink',
    size: 'medium',
    type: 'button',
  };

  render() {
    const { children, className, theme, size, type, ...rest } = this.props;

    const classes = cn(
      'gem-button',
      `gem-button-${theme}`,
      `gem-button-${size}`,
      className
    );

    return (
      <button className={classes} type={type} {...rest}>
        {children}
      </button>
    );
  }
}
