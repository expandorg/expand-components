import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Collapsable as UICollapsable } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Collapsable.module.styl';

export default class Collapsable extends Component {
  static propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    expanded: PropTypes.bool, //eslint-disable-line
  };

  static defaultProps = {
    expanded: false,
  };

  static module = {
    type: 'collapsable',
    name: 'Collapsable',
    editor: {
      category: ModuleCategories.Display,
      properties: {
        header: {
          type: PropControlTypes.string,
          placeholder: 'Title text',
          required: true,
        },
        expanded: {
          type: PropControlTypes.boolean,
          label: 'Expanded by default',
        },
        modules: {
          type: PropControlTypes.modules,
          caption: 'Drop content here',
        },
      },
      defaults: {
        header: 'Click to Expand/Collapse',
        modules: [
          {
            name: 'p-2',
            type: 'text',
            style: 'description',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      },
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded,
    };
  }

  handleToggle = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  render() {
    const { header, children } = this.props;
    const { expanded } = this.state;
    return (
      <UICollapsable
        className={styles.collapsable}
        expanded={expanded}
        header={<div className={styles.header}>{header}</div>}
        onToggle={this.handleToggle}
      >
        <div className={styles.container}>{children}</div>
      </UICollapsable>
    );
  }
}
