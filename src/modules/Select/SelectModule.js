import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';

import Choice from './Choice';
import Select from './Select';

export default class SelectModule extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    columns: PropTypes.oneOf([2, 3]),
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    answer: null,
    readOnly: false,
    columns: 2,
  };

  handleChange = answerId => {
    const { name, onChange } = this.props;
    onChange(name, answerId);
  };

  render() {
    const { value, options, columns, readOnly, answer } = this.props;
    const selected = readOnly ? answer : value;
    return (
      <Alignment padding="small">
        <Select
          options={options}
          onSelect={this.handleChange}
          columns={columns}
        >
          {({ id, onSelect, option }) => (
            <Choice
              key={id}
              option={option}
              readOnly={readOnly}
              selected={selected === id}
              onSelect={onSelect}
            />
          )}
        </Select>
      </Alignment>
    );
  }
}
