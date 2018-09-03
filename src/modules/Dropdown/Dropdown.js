import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIDropdown from '../../components/Dropdown';
import DropdownContent from './DropdownContent';

import Alignment from '../Alignment';

import styles from './Dropdown.module.styl';

export default class Dropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    placeholder: PropTypes.string,
    justify: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: '',
    value: '',
    justify: 'center',
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { options, placeholder, value, justify } = this.props;
    return (
      <Alignment padding="small" justify={justify}>
        <UIDropdown
          className={styles.dropdown}
          value={value}
          options={options}
          onChange={this.handleChange}
        >
          {({ formatted }) => (
            <DropdownContent value={formatted} placeholder={placeholder} />
          )}
        </UIDropdown>
      </Alignment>
    );
  }
}
