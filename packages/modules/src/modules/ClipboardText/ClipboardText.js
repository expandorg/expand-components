import React from 'react';
import PropTypes from 'prop-types';

import { IconInput } from '@expandorg/components';
import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './ClipboardText.module.styl';

export default function ClipboardText({ text, label }) {
  return (
    <div className={styles.container}>
      <IconInput
        className={styles.text}
        readOnly
        copy
        placeholder={label}
        value={text}
      />
      <VarsPlaceholder vval={text} pos="left" />
    </div>
  );
}

ClipboardText.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
};

ClipboardText.defaultProps = {
  label: null,
  text: '',
};

ClipboardText.module = {
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
