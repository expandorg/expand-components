import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

import './ListNav.styl';

export default class ListNav extends Component {
  static propTypes = {
    className: PropTypes.string,
    navs: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string,
      })
    ),
    theme: PropTypes.oneOf(['default', 'raised']),
  };

  static defaultProps = {
    className: null,
    theme: 'default',
    navs: [],
  };

  render() {
    const { className, navs, theme } = this.props;

    return (
      <div className={cn('gem-listnav', `gem-listnav__${theme}`, className)}>
        <div className="gem-listnav-inner">
          {navs.map(({ href, text }) => (
            <NavLink
              key={href}
              className="gem-listnav-link"
              activeClassName="gem-listnav-link-active"
              exact
              to={href}
            >
              {text}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}
