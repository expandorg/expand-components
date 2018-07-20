import { Component } from 'react';
import PropTypes from 'prop-types';

export default class WithState extends Component {
  static propTypes = {
    initial: PropTypes.any, // eslint-disable-line
  };

  static defaultProps = {
    initial: null,
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
    const { value } = this.state;
    const { children } = this.props;
    return children({ value, onChange: this.handleChange });
  }
}
