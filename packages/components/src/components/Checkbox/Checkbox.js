import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Checkbox.styl';

export default class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    value: false,
    name: undefined,
    label: '',
  };

  handleChange = () => {
    const { onChange, value, name } = this.props;
    onChange(!value, name);
  };

  render() {
    const { label, value, className } = this.props;

    /* eslint-disable jsx-a11y/label-has-associated-control */
    /* eslint-disable jsx-a11y/label-has-for */

    return (
      <label className={cn('gem-checkbox', className)}>
        <input
          type="checkbox"
          className="gem-checkbox-input"
          checked={value}
          onChange={this.handleChange}
        />
        <span className="gem-checkbox-mark" />
        {label && <span className="gem-checkbox-label">{label}</span>}
      </label>
    );
  }
}
