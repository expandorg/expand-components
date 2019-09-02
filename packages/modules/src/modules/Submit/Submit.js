import React from 'react';
import PropTypes from 'prop-types';

import { Button, VarsPlaceholder } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';
import { useExecutionContext } from '../../form/components/ExecutionContext';

import styles from './Submit.module.styl';

export default function Submit({ caption, isModulePreview }) {
  const { isSubmitting, onSubmit } = useExecutionContext();
  return (
    <Button
      className={styles.submit}
      onClick={onSubmit}
      type="submit"
      disabled={isSubmitting}
    >
      {caption}
      <VarsPlaceholder
        vval={caption}
        isModulePreview={isModulePreview}
        pos="center"
      />
    </Button>
  );
}

Submit.propTypes = {
  caption: PropTypes.string.isRequired,
  isModulePreview: PropTypes.bool,
};

Submit.defaultProps = {
  isModulePreview: false,
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
