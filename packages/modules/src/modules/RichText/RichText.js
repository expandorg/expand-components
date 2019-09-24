import React from 'react';
import PropTypes from 'prop-types';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './RichText.module.styl';

export default function RichText({ content }) {
  /* eslint-disable react/no-danger */
  return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

RichText.propTypes = {
  content: PropTypes.string,
};

RichText.defaultProps = {
  content: '',
};

RichText.module = {
  type: 'richText',
  name: 'Text',
  editor: {
    category: ModuleCategories.Text,
    properties: {
      content: {
        type: PropControlTypes.richText,
        placeholder: 'Text...',
        required: true,
      },
    },
    defaults: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    },
  },
};
