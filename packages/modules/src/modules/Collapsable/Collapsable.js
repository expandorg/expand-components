import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Collapsable as UICollapsable } from '@gemsorg/components';

import Alignment from '../../components/Alignment';

import PropControlTypes from '../../form/Form/PropControlTypes';

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
    editor: {
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
        },
      },
      defaults: {
        header: 'Click to Expand/Collapse',
        modules: {
          type: 'article',
          name: 'article',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
        },
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
      <Alignment padding="small">
        <UICollapsable
          className={styles.collapsable}
          expanded={expanded}
          header={<div className={styles.header}>{header}</div>}
          onToggle={this.handleToggle}
        >
          <div className={styles.container}>{children}</div>
        </UICollapsable>
      </Alignment>
    );
  }
}
