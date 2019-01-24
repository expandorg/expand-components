import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './SidebarLink.styl';

export default class SidebarLink extends Component {
  static propTypes = {
    item: PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <NavLink
        to={item.link}
        className="gem-sidebar-link"
        isActive={item.isActive}
        exact
        activeClassName="gem-sidebar-link-active"
      >
        <item.icon className="gem-sidebar-link-icon" />
        {item.title}
      </NavLink>
    );
  }
}
