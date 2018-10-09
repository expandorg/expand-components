import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './Toast.styl';

export default class Toast extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.instanceOf(Object),
  };

  static defaultProps = {
    className: null,
    style: null,
  };

  render() {
    const { children, className, style } = this.props;
    return (
      <div className={cn('gem-toast', className)} style={style}>
        {children}
      </div>
    );
  }
}
