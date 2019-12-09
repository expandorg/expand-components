import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

import './SidebarLink.styl';

export default function SidebarLink({ item }) {
  return (
    <NavLink
      to={item.link}
      className="gem-sidebar-link"
      isActive={item.isActive}
      exact
      activeClassName="gem-sidebar-link-active"
    >
      <item.icon
        className="gem-sidebar-link-icon"
        width="18px"
        height="18px"
        viewBox="0 0 30 23"
      />
      {item.title}
    </NavLink>
  );
}

SidebarLink.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
  }).isRequired,
};
