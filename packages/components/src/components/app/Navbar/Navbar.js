import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '@expandorg/uikit/assets/logo.svg';

import './Navbar.styl';

export default function Navbar({
  children,
  title,
  logoUrl,
  top,
  menu,
  theme,
  className,
}) {
  const classes = cn(
    'gem-navbar',
    `gem-navbar__${theme}`,
    { 'gem-navbar__top': top },
    className
  );

  return (
    <div className={classes}>
      <Link to={logoUrl} className="gem-navbar-logo">
        <Logo width="33" height="33" viewBox="0 0 50 50" />
      </Link>
      <h1 className="gem-navbar-title">{title}</h1>
      <div className="gem-navbar-content">{children}</div>
      {menu}
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  logoUrl: PropTypes.string,
  className: PropTypes.string,
  top: PropTypes.bool,
  menu: PropTypes.element,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Navbar.defaultProps = {
  className: null,
  title: '',
  logoUrl: '/',
  theme: 'light',
  top: true,
  menu: null,
};
