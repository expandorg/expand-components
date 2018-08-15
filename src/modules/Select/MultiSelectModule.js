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
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ),
    answers: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ),
    columns: PropTypes.oneOf([2, 3]),
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: [],
    answers: [],
    columns: 2,
    readOnly: false,
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
    const { value, options, columns, answers, readOnly } = this.props;
    const selection = readOnly ? answers : value;
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
              checkMark
              selected={selection.includes(id)}
              readOnly={readOnly}
              onSelect={onSelect}
              option={option}
            />
          )}
        </Select>
      </Alignment>
    );
  }
}
