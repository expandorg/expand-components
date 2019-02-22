import { Component } from 'react';
import PropTypes from 'prop-types';

import debounce from 'debounce';

import { calculateCondition, getFormValues } from './calculateCondition';

import { getFormModulesNames } from '../../form/model/modules';

import { formProps } from '../../form/components/Form';

const DEBOUNCE = 100;

export default class ConditionalControl extends Component {
  static propTypes = {
    condition: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    form: formProps.isRequired,
    values: PropTypes.object, // eslint-disable-line
    // variables: PropTypes.object, // eslint-disable-line
    isFormBuilder: PropTypes.bool,
  };

  static defaultProps = {
    condition: '',
    isFormBuilder: false,
    values: null,
    // variables: null,
  };

  constructor(props) {
    super(props);

    this.recalculate = debounce(this.recalculate, DEBOUNCE);

    const moduleNames = getFormModulesNames(props.form);

    const values = getFormValues(props.values, moduleNames);
    const visible = calculateCondition(props.condition, values);

    this.state = {
      form: props.form, // eslint-disable-line react/no-unused-state
      moduleNames,
      visible,
    };
  }

  static getDerivedStateFromProps({ form }, state) {
    if (form !== state.form) {
      return {
        form,
        moduleNames: getFormModulesNames(form),
      };
    }
    return null;
  }

  componentDidUpdate({ values: prevValues }) {
    const { values } = this.props;
    if (values !== prevValues) {
      this.recalculate();
    }
  }

  componentWillUnmount() {
    this.recalculate.clear();
  }

  recalculate = () => {
    const { condition, values } = this.props;
    const { visible: current, moduleNames } = this.state;

    const formValues = getFormValues(values, moduleNames);
    const visible = calculateCondition(condition, formValues);

    if (current !== visible) {
      this.setState({ visible });
    }
  };

  render() {
    const { children, isFormBuilder } = this.props;
    const { visible } = this.state;

    return visible || isFormBuilder ? children : null;
  }
}
