import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './FlexContainer.module.styl';

export default function FlexContainer({ children, justify }) {
  return (
    <div className={cn(styles.container, styles[`justify-${justify}`])}>
      {children}
    </div>
  );
}

FlexContainer.propTypes = {
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'space-between',
    'space-around',
  ]),
};

FlexContainer.defaultProps = {
  justify: 'start',
};

FlexContainer.module = {
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
    },
  },
};
