import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Select, Choice } from '../../components/Select';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './styles.module.styl';

export default class Multiselect extends Component {
  handleChange = (answerId) => {
    const { name, onChange, value, readOnly } = this.props;

    if (!readOnly) {
      const selection = value || [];

      const updated = selection.includes(answerId)
        ? selection.filter((el) => el !== answerId)
        : [...selection, answerId];

      onChange(name, updated);
    }
  };

  render() {
    const { value, options, columns, readOnly, initial } = this.props;

    const selection = readOnly ? initial : value;

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

Multiselect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  readOnly: PropTypes.bool,
  initial: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  columns: PropTypes.oneOf([2, 3]),
  onChange: PropTypes.func.isRequired,
};

Multiselect.defaultProps = {
  value: [],
  readOnly: false,
  initial: [],
  columns: 2,
};

Multiselect.module = {
  type: 'multiselect',
  name: 'Select (multiple)',
  isInput: true,
  validation: {
    isRequired: rules.isRequiredArray,
  },
  editor: {
    category: ModuleCategories.Input,
    properties: {
      columns: {
        type: PropControlTypes.enum,
        label: 'Number of Columns',
        options: [1, 2, 3],
      },
      options: {
        type: PropControlTypes.options,
        placeholder: 'Options',
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
