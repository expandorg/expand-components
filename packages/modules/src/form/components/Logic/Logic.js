import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ExecutionContextClient } from '../ExecutionContext';
import VisibilityLogic from './VisibilityLogic';

import moduleProps from '../Module/moduleProps';

export default class Logic extends Component {
  static propTypes = {
    isFormBuilder: PropTypes.bool,
    module: moduleProps.isRequired,
  };

  static defaultProps = {
    isFormBuilder: false,
  };

  render() {
    const { children, module, isFormBuilder } = this.props;

    if (!module.logic || isFormBuilder) {
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
