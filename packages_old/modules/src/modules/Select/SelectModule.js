import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import Alignment from '../../components/Alignment';

import Choice from './Choice';
import Select from './Select';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import { formatter, IdType } from './ids';

export default class SelectModule extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    idType: PropTypes.oneOf([
      IdType.small,
      IdType.capital,
      IdType.roman,
      IdType.numerals,
    ]),
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
    idType: IdType.small,
  };

  static module = {
    type: 'select',
    name: 'Select',
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
      isNotEmpty: rules.isNotEmpty,
    },
    verificationScore: value => {
      const numeric = +value;
      if (Number.isNaN(numeric)) {
        return 0;
      }
      return Math.min(Math.max(numeric, 0), 1);
    },
    editor: {
      category: ModuleCategories.Input,
      properties: {
        columns: {
          type: PropControlTypes.enum,
          label: 'Columns number',
          options: [2, 3],
          default: 2,
        },
        idType: {
          type: PropControlTypes.enum,
          label: 'Enumerator type',
          options: ['numerals', 'small', 'capital', 'roman'],
          formatter,
          default: 'small',
        },
        answer: {
          type: PropControlTypes.moduleProperyOptions,
          label: 'Answer',
          dependency: 'options',
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
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options, columns, readOnly, answer, idType } = this.props;

    const selected = readOnly ? answer : value;

    return (
      <Alignment padding="small">
        <Select
          options={options}
          onSelect={this.handleChange}
          columns={columns}
          idType={idType}
        >
          {({ onSelect, option }) => (
            <Choice
              key={option.value}
              option={option}
              readOnly={readOnly}
              selected={selected === option.value}
              onSelect={onSelect}
            />
          )}
        </Select>
      </Alignment>
    );
  }
}
