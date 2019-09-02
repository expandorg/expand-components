import React, { useCallback, Children } from 'react';
import PropTypes from 'prop-types';

import { Button, useSyncedState } from '@expandorg/components';

import {
  ModuleCategories,
  PropControlTypes,
} from '../../form/components/Module';
import { useExecutionContext } from '../../form/components/ExecutionContext';

import styles from './Wizard.module.styl';

const reset = () => 0;

export default function Wizard({ children, modules }) {
  const { onValidate, onSubmit, isSubmitting } = useExecutionContext();

  const stepCount = Children.count(children);

  const [current, setCurrent] = useSyncedState(stepCount, reset);

  const next = useCallback(() => {
    const hasErrors = onValidate([modules[current]]);
    if (!hasErrors) {
      setCurrent(current + 1);
    }
  }, [current, modules, onValidate, setCurrent]);

  const prev = useCallback(() => {
    setCurrent(current - 1);
  }, [current, setCurrent]);

  const step = Children.toArray(children)[current];
  const last = current === stepCount - 1;

  return (
    <div className={styles.container}>
      {step}
      <div className={styles.actions}>
        {current !== 0 && (
          <Button onClick={prev} theme="secondary">
            Back
          </Button>
        )}
        {!last && <Button onClick={next}>Next</Button>}
        {last && (
          <Button onClick={onSubmit} type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}

Wizard.module = {
  type: 'wizard',
  name: 'Wizard',
  editor: {
    category: ModuleCategories.Display,
    properties: {
      modules: {
        type: PropControlTypes.modules,
        caption: 'Drop content here',
      },
    },
    defaults: {},
  },
};

Wizard.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.object),
};

Wizard.defaultProps = {
  modules: [],
};
