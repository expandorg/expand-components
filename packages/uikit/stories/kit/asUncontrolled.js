import React, { Component } from 'react';

const asUncontrolled = (
  Wrapped,
  propName = 'value',
  handlerName = 'onChange',
  getValue = v => v
) =>
  class WithState extends Component {
    static displayName = Wrapped.name;

    static propTypes = Wrapped.propTypes; // eslint-disable-line

    static defaultProps = Wrapped.defaultProps;

    constructor(props) {
      super(props);
      this.state = {
        value: props[propName],
      };
    }

    render() {
      const { value } = this.state;
      const overrided = {
        ...this.props,
        [propName]: value,
        [handlerName]: (...args) => {
          this.setState({ value: getValue(...args) });
          const handler = this.props[handlerName]; // eslint-disable-line
          if (handler) {
            handler(...args);
          }
        },
      };
      return <Wrapped {...overrided} />;
    }
  };

export default asUncontrolled;
