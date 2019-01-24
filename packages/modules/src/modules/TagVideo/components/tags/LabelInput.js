import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Input, Dropdown } from '@expandorg/components';

import styles from './LabelInput.module.styl';

export default class LabelInput extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    sendRef: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    options: [],
    readOnly: false,
    sendRef: undefined,
    value: '',
  };

  render = () => {
    const {
      value,
      options,
      sendRef,
      onChange,
      placeholder,
      readOnly,
    } = this.props;
    if (options.length) {
      return (
        <Dropdown
          className={styles.dropdown}
          value={value}
          label={placeholder}
          nullValue="Label"
          options={options}
          disabled={readOnly}
          onChange={onChange}
        />
      );
    }
    return (
      <Input
        ref={sendRef}
        readOnly={readOnly}
        className={styles.input}
        placeholder="Label"
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    );
  };
}
