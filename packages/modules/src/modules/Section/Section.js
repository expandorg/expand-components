import React from 'react';

import { ModuleCategories } from '../../form/components/Module';

import styles from './Section.module.styl';

export default function Section({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Section.module = {
  type: 'section',
  name: 'Section',
  editor: {
    category: ModuleCategories.Display,
    properties: {},
    defaults: {},
  },
};
