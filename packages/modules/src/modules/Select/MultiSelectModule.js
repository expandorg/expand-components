import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@gemsorg/validation';

import Alignment from '../../components/Alignment';

import Choice from './Choice';
import Select from './Select';

import PropControlTypes from '../../form/Form/PropControlTypes';

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

  static module = {
    type: 'multiselect',
    name: 'Select (multiple)',
    isInput: true,
    validation: {
      isRequired: rules.isRequiredArray,
      isNotEmpty: rules.isRequiredArray,
    },
    editor: {
      properties: {
        columns: {
          type: PropControlTypes.enum,
          options: [2, 3],
          default: 2,
        },
        readOnly: {
          type: PropControlTypes.boolean,
          label: 'Read only',
        },
      },
      defaults: {
        options: [
          { value: 1, id: 1, caption: 'Option 1' },
          { value: 2, id: 2, caption: 'Option 2' },
          { value: 3, id: 3, caption: 'Option 2' },
          { value: 4, id: 4, caption: 'Option 4' },
        ],
      },
    },
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
          {({ onSelect, option }) => (
            <Choice
              key={option.value}
              checkMark
              selected={selection.includes(option.value)}
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
