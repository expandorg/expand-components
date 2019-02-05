import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Select, Choice } from '../../components/Select';

import PropControlTypes from '../../form/Form/PropControlTypes';

import styles from './styles.module.styl';

export default class Multiselect extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    value: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    answers: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
        },
        readOnly: {
          type: PropControlTypes.boolean,
          label: 'Read only',
        },
      },
      defaults: {
        columns: 2,
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
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
      <div className={styles.module}>
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
      </div>
    );
  }
}
