import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ClipboardButton, Input, VarsPlaceholder } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './ClipboardText.module.styl';

export default class ClipboardText extends Component {
  static propTypes = {
    text: PropTypes.string,
    label: PropTypes.string,
    isModulePreview: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    isModulePreview: false,
    text: '',
  };

  static module = {
    type: 'clipboardText',
    name: 'Copy to clipboard',
    editor: {
      category: ModuleCategories.Display,
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
    const { text, label, isModulePreview } = this.props;
    return (
      <div className={styles.container}>
        <Input
          className={styles.text}
          readOnly
          placeholder={label}
          value={text}
        />
        <VarsPlaceholder
          vval={text}
          isModulePreview={isModulePreview}
          pos="left"
        />
        <ClipboardButton className={styles.copy} value={text}>
          Copy
        </ClipboardButton>
      </div>
    );
  }
}
