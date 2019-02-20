import { Component } from 'react';
import PropTypes from 'prop-types';

import debounce from 'debounce';

import evaluateCondition from './evaluateCondition';

const DEBOUNCE = 100;

export default class ConditionalControl extends Component {
  static propTypes = {
    condition: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    values: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    condition: '',
    values: null,
  };

  constructor(props) {
    super(props);

    this.reEvaluateCondition = debounce(this.reEvaluateCondition, DEBOUNCE);

    this.state = {
      visible: evaluateCondition(props.condition, props.values),
    };
  }

  componentDidUpdate({ values: prevValues }) {
    const { values } = this.props;
    if (values !== prevValues) {
      this.reEvaluateCondition();
    }
  }

  componentWillUnmount() {
    this.reEvaluateCondition.clear();
  }

  reEvaluateCondition = () => {
    const { condition, values } = this.props;
    const { visible: old } = this.state;

    const visible = evaluateCondition(condition, values);
    if (old !== visible) {
      this.setState({ visible });
    }
  };

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return visible ? children : null;
  }
}
