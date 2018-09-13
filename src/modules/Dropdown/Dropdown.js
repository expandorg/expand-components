import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIDropdown from '../../components/Dropdown';
import DropdownContent from './DropdownContent';

import Alignment from '../Alignment';
import Label from '../Label';

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
