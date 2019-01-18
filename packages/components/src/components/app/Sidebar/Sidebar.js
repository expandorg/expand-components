import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import './Sidebar.styl';

class Sidebar extends Component {
  render() {
    const { children } = this.props;

    return <div className="gem-sidebar">{children}</div>;
  }
}

export default withRouter(Sidebar);
