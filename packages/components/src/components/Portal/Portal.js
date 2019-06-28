import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default class Portal extends Component {
  portal = document.getElementById('portal');
  el = document.createElement('div');

  componentDidMount() {
    this.portal.appendChild(this.el);
  }

  componentWillUnmount() {
    this.portal.removeChild(this.el);
  }

  render() {
    const { children, ...rest } = this.props;

    return createPortal(<div {...rest}>{children}</div>, this.el);
  }
}
