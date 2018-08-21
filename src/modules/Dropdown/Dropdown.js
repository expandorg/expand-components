import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIDropdown from '../../components/Dropdown';
import { ArrowDown } from '../../components/SvgIcons';

import Alignment from '../Alignment';

import styles from './Dropdown.module.styl';

export default class Dropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: '',
    value: '',
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { options, placeholder, value } = this.props;
    return (
      <Alignment padding="small">
        <UIDropdown
          className={styles.dropdown}
          value={value}
          options={options}
          onChange={this.handleChange}
        >
          {({ formatted }) => (
            <div className={styles.content}>
              {formatted ? (
                <div className={styles.value}>{formatted}</div>
              ) : (
                <div className={styles.placeholder}>{placeholder}</div>
              )}
              <div className={styles.shevron}>
                <ArrowDown />
              </div>
            </div>
          )}
        </UIDropdown>
      </Alignment>
    );
  }
}
