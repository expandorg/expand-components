import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './Navbar.styl';

export default class Navbar extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    top: PropTypes.bool,
    menu: PropTypes.element,
    theme: PropTypes.oneOf(['dark', 'light']),
  };

  static defaultProps = {
    className: null,
    title: '',
    theme: 'light',
    top: true,
    menu: null,
  };

  render() {
    const { children, title, top, menu, theme, className } = this.props;

    const classes = cn(
      'gem-navbar',
      `gem-navbar__${theme}`,
      { 'gem-navbar__top': top },
      className
    );

    return (
      <div className={classes}>
        <Link to="/" className="gem-navbar-logo">
          <Logo />
        </Link>
        <h1 className="gem-navbar-title">{title}</h1>
        <div className="gem-navbar-content">{children}</div>
        {menu}
      </div>
    );
  }
}
