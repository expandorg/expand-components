import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { Dropdown as UIDropdown } from '@expandorg/components';

import DropdownContent from './DropdownContent';

import Alignment from '../../components/Alignment';
import Label from '../../components/Label';

import ModuleCategories from '../../form/Form/ModuleCategories';
import PropControlTypes from '../../form/Form/PropControlTypes';

import styles from './Dropdown.module.styl';

export default class Dropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    placeholder: PropTypes.string,
    justify: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: '',
    value: '',
    label: '',
    justify: 'center',
  };

  static module = {
    type: 'dropdown',
    name: 'Dropdown',
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
      isNotEmpty: rules.isNotEmpty,
    },
    editor: {
      category: ModuleCategories.Input,
      properties: {
        content: {
          type: PropControlTypes.options,
        },
      },
      defaults: {
        placeholder: 'Select one',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      },
    },
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { options, label, placeholder, value, justify } = this.props;
    return (
      <Alignment padding="small" justify={justify}>
        <Label label={label} className={styles.label}>
          <UIDropdown
            className={styles.dropdown}
            value={value}
            nullValue={placeholder}
            options={options}
            onChange={this.handleChange}
          >
            {({ formatted }) => (
              <DropdownContent value={formatted} placeholder={placeholder} />
            )}
          </UIDropdown>
        </Label>
      </Alignment>
    );
  }
}
