import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Checkbox.styl';

export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    value: false,
    label: '',
  };

  handleChange = () => {
    const { onChange, value } = this.props;
    onChange(!value);
  };

  render() {
    const { label, name, value, className } = this.props;
    return (
      <label htmlFor={name} className={cn('gem-checkbox', className)}>
        <input
          className="gem-checkbox-input"
          type="checkbox"
          id={name}
          checked={value}
          onChange={this.handleChange}
        />
        <span className="gem-checkbox-mark" />
        {label && <span className="gem-checkbox-label">{label}</span>}
      </label>
    );
  }
}
