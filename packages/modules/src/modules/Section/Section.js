import React from 'react';

import {
  ModuleCategories,
  PropControlTypes,
} from '../../form/components/Module';

import styles from './Section.module.styl';

export default function Section({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Section.module = {
  type: 'section',
  name: 'Section',
  editor: {
    category: ModuleCategories.Display,
    skipPreview: true,
    properties: {
      modules: {
        type: PropControlTypes.modules,
        caption: 'Drop content here',
      },
    },
    defaults: {},
  },
};
