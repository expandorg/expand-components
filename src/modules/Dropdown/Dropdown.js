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
    justify: PropTypes.string,
    value: PropTypes.string,
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
