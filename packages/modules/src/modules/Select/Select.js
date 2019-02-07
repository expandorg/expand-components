import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Select as UISelect, Choice } from '../../components/Select';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import { formatter, IdType } from '../../components/Select/ids';

import styles from './styles.module.styl';

export default class Select extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    idType: PropTypes.oneOf([
      IdType.none,
      IdType.small,
      IdType.capital,
      IdType.roman,
      IdType.numerals,
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    columns: PropTypes.oneOf([2, 3]),
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
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
        },
        idType: {
          type: PropControlTypes.enum,
          label: 'Enumerator type',
          options: ['none', 'numerals', 'small', 'capital', 'roman'],
          formatter,
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
        idType: 'small',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options, columns, readOnly, idType } = this.props;

    const selected = value;

    return (
      <div className={styles.module}>
        <UISelect
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
        </UISelect>
      </div>
    );
  }
}
