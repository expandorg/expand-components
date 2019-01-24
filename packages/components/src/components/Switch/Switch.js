import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Switch.styl';

export default class Switch extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: false,
    className: null,
    name: undefined,
    onChange: Function.prototype,
  };

  handleToggle = evt => {
    const { onChange, value } = this.props;
    onChange(!value, evt);
  };

  render() {
    const { className, value, children, onChange, name, ...rest } = this.props;

    /* eslint-disable */
    return (
      <label className={cn('gem-switch2', className)} {...rest}>
        <input
          type="checkbox"
          className="gem-switch2-input"
          checked={value}
          name={name}
          onClick={this.handleToggle}
          readOnly
        />
        <span
          className={cn(
            `gem-switch2-container`,
            `gem-switch2-container-${value ? 'on' : 'off'}`
          )}
        >
          <span className="gem-switch2-thumb" />
        </span>
        {children}
      </label>
    );
  }
}
