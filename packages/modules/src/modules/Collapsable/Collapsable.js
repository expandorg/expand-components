import React from 'react';
import PropTypes from 'prop-types';

import { Collapsable as UICollapsable, useToggle } from '@expandorg/components';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Collapsable.module.styl';

export default function Collapsable({ header, expanded: initial, children }) {
  const [expanded, toggle] = useToggle(initial);
  return (
    <UICollapsable
      className={styles.collapsable}
      expanded={expanded}
      onToggle={toggle}
      header={
        <div className={styles.header}>
          {header}
          <VarsPlaceholder vval={header} />
        </div>
      }
    >
      <div className={styles.container}>{children}</div>
    </UICollapsable>
  );
}

Collapsable.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  expanded: PropTypes.bool,
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
