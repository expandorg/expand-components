import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Text.module.styl';

export default function Text({ content, align, style, color }) {
  const classes = cn(styles.text, styles[style], styles[color], styles[align]);
  /* eslint-disable react/no-danger */
  return (
    <div className={classes} dangerouslySetInnerHTML={{ __html: content }} />
  );
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'pre',
    'body',
    'title',
    'description',
    'question',
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(['blue', 'black']),
};

Text.defaultProps = {
  style: 'body',
  align: 'left',
  color: 'black',
};

Text.module = {
  type: 'text',
  name: 'HTML',
  editor: {
    category: ModuleCategories.Text,
    properties: {
      style: {
        type: PropControlTypes.enum,
        label: 'Style',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'pre',
          'body',
          'description',
          'question',
        ],
        required: true,
      },
      content: {
        type: PropControlTypes.text,
        placeholder: 'Content',
        required: true,
      },
      align: {
        type: PropControlTypes.enum,
        label: 'Alignment',
        options: ['left', 'center', 'right'],
        required: true,
      },
      color: {
        type: PropControlTypes.enum,
        label: 'Text Color',
        options: ['black', 'blue'],
        required: true,
      },
    },
    defaults: {
      align: 'left',
      style: 'body',
      color: 'black',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    },
  },
};
