import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input } from '@gemsorg/components';

import {
  formatTime,
  parseTime,
} from '../../../../components/VideoPlayer/utils/timeStrings';

export default class TimeInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    readOnly: false,
    className: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: formatTime(props.value, { hours: true }),
      originalDate: props.value, // eslint-disable-line
    };
  }

  static getDerivedStateFromProps({ value }, state) {
    if (value !== state.originalDate) {
      return {
        value: formatTime(value, { hours: true }),
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
    const { className, readOnly } = this.props;
    const { value } = this.state;
    return (
      <Input
        readOnly={readOnly}
        className={className}
        value={value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}
