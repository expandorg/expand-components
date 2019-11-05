import React from 'react';
import PropTypes from 'prop-types';

import { Button, useToggle } from '@expandorg/components';

import Modal from '../../components/Modal';
import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Instructions.module.styl';

export default function Instructions({ button, children }) {
  const [visible, toggle] = useToggle(false);

  return (
    <div className={styles.container}>
      <Button className={styles.button} theme="white-blue" onClick={toggle}>
        {button}
        <VarsPlaceholder vval={button} pos="center" />
      </Button>
      <Modal visible={visible} onHide={toggle} button="Close">
        {children}
      </Modal>
    </div>
  );
}

Instructions.propTypes = {
  button: PropTypes.string,
};

Instructions.defaultProps = {
  button: null,
};

Instructions.module = {
  type: 'instructions',
  name: 'Instructions',
  editor: {
    category: ModuleCategories.Display,
    properties: {
      button: {
        type: PropControlTypes.string,
        placeholder: 'button caption',
      },
      modules: {
        type: PropControlTypes.modules,
        caption: 'Drop dialog content here',
      },
    },
    defaults: {
      button: 'Instructions',
    },
  },
};
