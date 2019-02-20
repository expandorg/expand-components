import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ClipboardButton, Input } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './ClipboardText.module.styl';

export default class ClipboardText extends Component {
  static propTypes = {
    text: PropTypes.string,
    label: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    text: '',
  };

  static module = {
    type: 'clipboardText',
    name: 'Copy to clipboard',
    editor: {
      category: ModuleCategories.Text,
      properties: {
        text: {
          type: PropControlTypes.string,
          placeholder: 'Text',
        },
        label: {
          type: PropControlTypes.string,
          placeholder: 'Label',
        },
      },
      defaults: {
        text: 'Click to copy text',
      },
    },
  };

  render() {
    const { text, label } = this.props;
    return (
      <div className={styles.container}>
        <Input
          className={styles.text}
          readOnly
          placeholder={label}
          value={text}
        />
        <ClipboardButton className={styles.copy} value={text}>
          Copy
        </ClipboardButton>
      </div>
    );
  }
}
