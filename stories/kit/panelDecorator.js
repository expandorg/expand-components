import React from 'react';
import Panel from '../../src/components/Panel';

import styles from './styles.module.styl';

export default story => <Panel className={styles.panel}>{story()}</Panel>;
