import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';

import Choice from './Choice';
import Select from './Select';

export default class MultiSelectModule extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    value: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    columns: PropTypes.oneOf([2, 3]),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: [],
    columns: 2,
  };

  handleChange = answerId => {
    const { name, onChange, value } = this.props;

    const selection = value || [];

    const updated = selection.includes(answerId)
      ? selection.filter(el => el !== answerId)
      : [...selection, answerId];

    onChange(name, updated);
  };

  render() {
    const { value, options, columns } = this.props;
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
              selected={value.includes(id)}
              checkMark
              onSelect={onSelect}
              option={option}
            />
          )}
        </Select>
      </Alignment>
    );
  }
}
