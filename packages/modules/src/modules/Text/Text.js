import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Text.module.styl';

export default class Text extends Component {
  static propTypes = {
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

  static defaultProps = {
    style: 'body',
    align: 'left',
    color: 'black',
  };

  static module = {
    type: 'text',
    name: 'HTML (Text)',
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

  render() {
    const { content, align, style, color } = this.props;
    const classes = cn(
      styles.text,
      styles[style],
      styles[color],
      styles[align]
    );
    /* eslint-disable react/no-danger */
    return (
      <div className={classes} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }
}
