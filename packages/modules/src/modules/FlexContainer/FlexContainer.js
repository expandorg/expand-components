import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './FlexContainer.module.styl';

export default class FlexContainer extends Component {
  static propTypes = {
    justify: PropTypes.oneOf([
      'start',
      'end',
      'center',
      'space-between',
      'space-around',
    ]),
  };

  static defaultProps = {
    justify: 'start',
  };

  static module = {
    type: 'flex',
    name: 'Horizontal alignment',
    editor: {
      category: ModuleCategories.Display,
      properties: {
        columns: {
          type: PropControlTypes.enum,
          label: 'Justify content',
          options: ['start', 'end', 'center', 'space-between', 'space-around'],
        },
        modules: {
          type: PropControlTypes.modules,
          caption: 'Drop content here',
        },
      },
      defaults: {
        columns: 'start',
        modules: [],
      },
    },
  };

  render() {
    const { children, justify } = this.props;
    return (
      <div className={cn(styles.container, styles[`justify-${justify}`])}>
        {children}
      </div>
    );
  }
}
