import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Select, Choice } from '../../components/Select';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import { formatter, IdType } from '../../components/Select/ids';

import styles from './YesNo.module.styl';

export default class YesNo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    idType: PropTypes.oneOf([
      IdType.none,
      IdType.small,
      IdType.capital,
      IdType.roman,
      IdType.numerals,
    ]),
    yesCaption: PropTypes.string.isRequired,
    noCaption: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isModulePreview: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    isModulePreview: false,
    idType: IdType.small,
  };

  static module = {
    type: 'yesno',
    name: 'Yes No',
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
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
        yesCaption: {
          type: PropControlTypes.string,
          placeholder: 'Positive answer',
          required: true,
        },
        noCaption: {
          type: PropControlTypes.string,
          placeholder: 'Negative answer',
          required: true,
        },
        idType: {
          type: PropControlTypes.enum,
          label: 'Enumerator type',
          options: ['none', 'numerals', 'small', 'capital', 'roman'],
          formatter,
        },
      },
      defaults: {
        idType: 'small',
        yesCaption: 'Yes',
        noCaption: 'No',
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const {
      value,
      idType,
      noCaption,
      yesCaption,
      isModulePreview,
    } = this.props;

    const options = [
      { value: '1', caption: yesCaption },
      { value: '0', caption: noCaption },
    ];

    return (
      <div className={styles.module}>
        <Select
          options={options}
          onSelect={this.handleChange}
          columns={2}
          idType={idType}
        >
          {({ onSelect, option }) => (
            <Choice
              key={option.value}
              option={option}
              selected={value === option.value}
              isModulePreview={isModulePreview}
              onSelect={onSelect}
            />
          )}
        </Select>
      </div>
    );
  }
}
