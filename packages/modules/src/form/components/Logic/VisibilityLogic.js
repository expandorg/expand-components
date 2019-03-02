import { Component } from 'react';
import PropTypes from 'prop-types';

import moduleProps from '../Module/moduleProps';

import { compileVisibilityExpression } from '../../model/logic/visibility';

export default class VisibilityLogic extends Component {
  static propTypes = {
    module: moduleProps.isRequired,
    values: PropTypes.object, // eslint-disable-line
    variables: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    values: null,
    variables: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      module: props.module, // eslit-disable-line react/no-unused-state
      expression: compileVisibilityExpression(props.module),
    };
  }

  static getDerivedStateFromProps({ module }, state) {
    if (module !== state.module) {
      return {
        module,
        expression: compileVisibilityExpression(module),
      };
    }
    return null;
  }

  render() {
    const { children, variables, values } = this.props;
    const { expression } = this.state;

    const visible = expression(variables, values);

    return visible ? children : null;
  }
}
