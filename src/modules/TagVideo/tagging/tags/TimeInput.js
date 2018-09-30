import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../components/Input';

import { formatTime, parseTime } from '../clip';

export default class TimeInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    className: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: formatTime(props.value),
      originalDate: props.value, // eslint-disable-line
    };
  }

  static getDerivedStateFromProps({ value }, state) {
    if (value !== state.originalDate) {
      return {
        value: formatTime(value),
        originalDate: value,
      };
    }
    return null;
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleBlur = () => {
    const { onChange } = this.props;
    const { value } = this.state;
    const date = parseTime(value);
    if (date) {
      onChange(date);
    }
  };

  render() {
    const { className } = this.props;
    const { value } = this.state;
    return (
      <Input
        className={className}
        value={value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}
