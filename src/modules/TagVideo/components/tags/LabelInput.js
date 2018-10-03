import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Input from '../../../../components/Input';
import Dropdown from '../../../../components/Dropdown';
import { ArrowDown } from '../../../../components/SvgIcons';

import styles from './LabelInput.module.styl';

export default class LabelInput extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,

    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    options: [],
    value: '',
  };

  render = () => {
    const { value, options, onChange } = this.props;
    if (options.length) {
      return (
        <Dropdown
          className={styles.dropdown}
          value={value}
          nullValue="Label"
          options={options}
          onChange={onChange}
        >
          {({ formatted }) => (
            <div className={styles.content}>
              <div
                className={cn(styles.value, { [styles.placeholder]: !value })}
              >
                {formatted || 'Select Label'}
              </div>
              <div className={styles.shevron}>
                <ArrowDown />
              </div>
            </div>
          )}
        </Dropdown>
      );
    }
    return (
      <Input
        className={styles.input}
        placeholder="Label"
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    );
  };
}
