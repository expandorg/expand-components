import React from 'react';

import { ModuleCategories } from '../../form/components/Module';

import styles from './Padding.module.styl';

export default function Padding() {
  return <div className={styles.container} />;
}

Padding.module = {
  type: 'padding',
  name: 'Padding',
  editor: {
    category: ModuleCategories.Display,
    skipPreview: true,
    properties: {},
    defaults: {},
  },
};
