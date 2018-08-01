import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';

import Choice from './Choice';
import Select from './Select';

export default class SelectField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options } = this.props;
    return (
      <Alignment padding="small">
        <Select options={options} onSelect={this.handleChange} value={value}>
          {({ key, onSelect, option, selected }) => (
            <Choice
              key={key}
              selected={selected}
              onSelect={onSelect}
              option={option}
            />
          )}
        </Select>
      </Alignment>
    );
  }
}
