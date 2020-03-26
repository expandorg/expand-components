import React from 'react';
import PropTypes from 'prop-types';

import Validation from '../Validation';
import { Logic } from '../Logic';

import moduleProps from './moduleProps';

export default function Module({ module, values, onChange, controls, errors }) {
  const Control = controls[module.type];
  const value = values ? values[module.name] : undefined;

  if (!Control) {
    return null;
  }

  return (
    <Logic module={module}>
      <Validation name={module.name} errors={errors}>
        <Control {...module} value={value} onChange={onChange}>
          {module.modules !== null &&
            module.modules !== undefined &&
            module.modules.map((m) => (
              <Module
                key={m.name}
                errors={errors}
                module={m}
                values={values}
                controls={controls}
                onChange={onChange}
              />
            ))}
        </Control>
      </Validation>
    </Logic>
  );
}

Module.propTypes = {
  module: moduleProps.isRequired,

  controls: PropTypes.shape({}).isRequired,
  values: PropTypes.any, // eslint-disable-line
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  onChange: PropTypes.func,
};

Module.defaultProps = {
  values: undefined,
  errors: null,
  onChange: Function.prototype,
};
