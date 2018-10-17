import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PropControlTypes from '../../form/Form/PropControlTypes';

import styles from './Paragraph.module.styl';

export default class Paragraph extends Component {
  static propTypes = {
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['small', 'medium']),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    centered: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    fontSize: 'small',
    centered: false,
  };

  static module = {
    type: 'paragraph',
    name: 'Text paragraph',
    editor: {
      properties: {
        content: {
          type: PropControlTypes.richText,
          placeholder: 'Article content',
          required: true,
        },
        fontSize: {
          type: PropControlTypes.enum,
          label: 'Font size',
          options: ['small', 'medium'],
          default: 'small',
        },
        centered: {
          type: PropControlTypes.boolean,
          label: 'Text align center',
        },
      },
      defaults: {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      },
    },
  };

  render() {
    const { content, className, fontSize, centered } = this.props;
    const classes = cn(
      styles.p,
      styles[`${fontSize}Font`],
      {
        [styles.center]: centered,
      },
      className
    );
    if (typeof content === 'string') {
      return (
        <div
          className={classes}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }
    return <div className={classes}>{content}</div>;
  }
}
