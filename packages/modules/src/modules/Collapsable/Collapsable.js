import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Collapsable as UICollapsable } from '@expandorg/components';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Collapsable.module.styl';

export default class Collapsable extends Component {
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
        header={
          <div className={styles.header}>
            {header}
            <VarsPlaceholder vval={header} />
          </div>
        }
        onToggle={this.handleToggle}
      >
        <div className={styles.container}>{children}</div>
      </UICollapsable>
    );
  }
}

Collapsable.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  expanded: PropTypes.bool, //eslint-disable-line
};

Collapsable.defaultProps = {
  expanded: false,
};

Collapsable.module = {
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
    },
  },
};
