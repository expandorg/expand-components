import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Text.module.styl';

export default class Text extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    style: PropTypes.oneOf(['body', 'h1']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
  };

  static defaultProps = {
    style: 'body',
    align: 'left',
  };

  static module = {
    type: 'text',
    name: 'Text',
    editor: {
      category: ModuleCategories.Text,
      properties: {
        style: {
          type: PropControlTypes.enum,
          label: 'Style',
          options: ['h1', 'h2', 'h3', 'h4', 'pre', 'body'],
          default: 'body',
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
          default: 'left',
          required: true,
        },
      },
      defaults: {
        align: 'left',
        style: 'body',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
    },
  };

  render() {
    const { content, align, style } = this.props;
    const classes = cn(styles.text, styles[style], styles[align]);
    /* eslint-disable react/no-danger */
    return (
      <div className={classes} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }
}
