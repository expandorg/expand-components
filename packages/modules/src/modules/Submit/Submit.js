import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@expandorg/components';

import { VarsPlaceholder } from '../../form/components/VarsPlaceholder';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import { useExecutionContext } from '../../form/components/ExecutionContext';

import styles from './Submit.module.styl';

export default function Submit({ caption }) {
  const { isSubmitting, onSubmit } = useExecutionContext();
  return (
    <Button
      className={styles.submit}
      onClick={onSubmit}
      type="submit"
      disabled={isSubmitting}
    >
      {caption}
      <VarsPlaceholder vval={caption} pos="center" />
    </Button>
  );
}

Submit.propTypes = {
  caption: PropTypes.string.isRequired,
};

Submit.module = {
  type: 'submit',
  name: 'Submit button',
  editor: {
    category: ModuleCategories.Input,
    properties: {
      caption: {
        type: PropControlTypes.string,
        placeholder: 'Button caption',
        required: true,
      },
    },
    defaults: {
      caption: 'Submit',
    },
  },
};
