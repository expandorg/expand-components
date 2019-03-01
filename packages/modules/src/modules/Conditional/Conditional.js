import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ExecutionContextClient } from '../../form/components/ExecutionContext';
import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import ConditionControl from './ConditionControl';

export default class Conditional extends Component {
  static propTypes = {
    condition: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isFormBuilder: PropTypes.bool,
  };

  static defaultProps = {
    condition: '',
    isFormBuilder: false,
  };

  static module = {
    type: 'conditional',
    name: 'if (condition)',
    editor: {
      category: ModuleCategories.Display,
      properties: {
        condition: {
          type: PropControlTypes.string,
          placeholder: 'Condition value',
        },
        modules: {
          type: PropControlTypes.modules,
          caption: 'Drop content here',
        },
      },
      defaults: {
        condition: '',
        modules: [],
      },
    },
  };

  render() {
    return (
      <ExecutionContextClient>
        {({ form, values, variables }) => (
          <ConditionControl
            {...this.props}
            form={form}
            values={values}
            variables={variables}
          />
        )}
      </ExecutionContextClient>
    );
  }
}
