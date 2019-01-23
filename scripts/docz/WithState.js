import { Component } from 'react';
import PropTypes from 'prop-types';

export default class WithState extends Component {
  static propTypes = {
    value: PropTypes.any, //eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return children({ onChange: this.handleChange, value });
  }
}
