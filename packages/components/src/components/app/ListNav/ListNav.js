import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
  };

  static defaultProps = {
    className: null,
    navs: [],
  };

  render() {
    const { className, navs } = this.props;

    return (
      <div className={cn('gem-listnav', className)}>
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
