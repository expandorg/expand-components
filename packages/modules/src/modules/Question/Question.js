import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../../components/Alignment';

import PropControlTypes from '../../form/Form/PropControlTypes';

import styles from './Question.module.styl';

export default class Question extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    padding: PropTypes.oneOf(['small', 'medium', 'none']),
  };

  static defaultProps = {
    title: '',
    content: '',
    padding: 'medium',
  };

  static module = {
    type: 'question',
    name: 'Question',
    editor: {
      properties: {
        title: {
          type: PropControlTypes.string,
          placeholder: 'Title',
        },
        content: {
          type: PropControlTypes.richText,
          placeholder: 'Article content',
        },
        padding: {
          type: PropControlTypes.enum,
          label: 'Padding',
          options: ['small', 'medium', 'none'],
          default: 'medium',
        },
      },
      defaults: {
        title: 'question title',
        content: 'Lorem ipsum dolor sit amet, consectetur',
      },
    },
  };

  render() {
    const { title, content, padding } = this.props;
    return (
      <Alignment padding={padding} vertical>
        {title && <div className={styles.title}>{title}</div>}
        {content && <div className={styles.content}>{content}</div>}
      </Alignment>
    );
  }
}
