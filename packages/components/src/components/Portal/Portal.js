import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

export default class Portal extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  portal = document.getElementById('portal');
  el = document.createElement('div');

  componentDidMount() {
    this.portal.appendChild(this.el);
  }

  componentWillUnmount() {
    this.portal.removeChild(this.el);
  }

  render() {
    const { children, className } = this.props;

    return createPortal(<div className={className}>{children}</div>, this.el);
  }
}
