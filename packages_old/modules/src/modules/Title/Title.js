import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './Title.module.styl';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

export default class Title extends Component {
  static propTypes = {
    className: PropTypes.string,
    centered: PropTypes.bool,
    title: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    title: '',
    centered: false,
  };

  static module = {
    type: 'title',
    name: 'Title',
    editor: {
      category: ModuleCategories.Text,
      properties: {
        title: {
          type: PropControlTypes.string,
          placeholder: 'Title text',
        },
        centered: {
          type: PropControlTypes.boolean,
          label: 'Text align: center',
        },
      },
      defaults: {
        title: 'some title',
      },
    },
  };

  render() {
    const { title, centered, className } = this.props;
    const classes = cn(
      styles.title,
      { [styles.centered]: centered },
      className
    );
    return (
      <div className={classes} dangerouslySetInnerHTML={{ __html: title }} />
    );
  }
}
