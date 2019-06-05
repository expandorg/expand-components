import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ExecutionContextClient } from '../ExecutionContext';
import VisibilityLogic from './VisibilityLogic';

import moduleProps from '../Module/moduleProps';

export default class Logic extends Component {
  static propTypes = {
    isModulePreview: PropTypes.bool,
    module: moduleProps.isRequired,
  };

  static defaultProps = {
    isModulePreview: false,
  };

  render() {
    const { children, module, isModulePreview } = this.props;

    if (!module.logic || isModulePreview) {
      return children;
    }

    return (
      <ExecutionContextClient>
        {({ values, variables }) => (
          <VisibilityLogic
            module={module}
            values={values}
            variables={variables}
          >
            {children}
          </VisibilityLogic>
        )}
      </ExecutionContextClient>
    );
  }
}
