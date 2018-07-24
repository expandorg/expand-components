import { Component } from 'react';
import PropTypes from 'prop-types';

export default class StateProvider extends Component {
  static propTypes = {
    initial: PropTypes.any, //eslint-disable-line
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.initial,
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { children } = this.props;
    const { value } = this.state;
    return children(value, this.handleChange);
  }
}
