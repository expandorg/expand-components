import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { range } from '@expandorg/components/src/common/immutable';
import { Tooltip } from '@expandorg/components';

import { useFormData } from '../../form/components/Form';
import { ModuleCategories } from '../../form/components/Module';

import styles from './Progress.module.styl';

const Tries = Tooltip(({ children, ...rest }) => (
  <div className={styles.tries} {...rest}>
    <span className={styles.left}>{children}</span>
  </div>
));

export default function Progress({ number, total }) {
  const formData = useFormData();
  if (!formData) {
    return null;
  }
  const { allowedRetries, currentTry } = formData;
  const triesLeft = (+allowedRetries || 0) - (+currentTry || 0);

  return (
    <div className={styles.container}>
      <div className={styles.range}>
        {range(total).map(index => (
          <div
            className={cn(styles.block, {
              [styles.next]: index > number,
            })}
            style={{
              width: `calc(${100 / total}% - 2px)`,
              minWidth: `calc(${100 / total}% - 2px )`,
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <Tries>{triesLeft}</Tries>
    </div>
  );
}

Progress.propTypes = {
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

Progress.module = {
  type: 'progress',
  name: 'QA Progress',
  editor: {
    category: ModuleCategories.Onboarding,
    defaults: {
      number: 1,
      total: 2,
    },
  },
};
