import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

// import formProps from './formProps';

const ValuesContext = createContext(null);

// const collectValues = () => {};

class ValuesContextProvider extends Component {
  static propTypes = {
    // form: formProps.isRequired,
    controls: PropTypes.object.isRequired, // eslint-disable-line
    values: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    values: null,
  };

  // constructor(props) {
  //   super(props);
  //   const names = (this.state = {
  //     form: props.form, // eslint-disable-line
  //     values: props.values, // eslint-disable-line

  //     collected: collectValues(
  //       props.values,
  //       props.form.modules,
  //       props.controls
  //     ),
  //   });
  // }

  // static getDerivedStateFromProps({ form, values }, state) {
  //   return null;
  // }

  render() {
    const { children } = this.props;
    // const { collected } = this.state;

    return (
      <ValuesContext.Provider value={{}}>{children}</ValuesContext.Provider>
    );
  }
}

const ValuesContextClient = ({ children }) => (
  <ValuesContext.Consumer>{values => children(values)}</ValuesContext.Consumer>
);

export { ValuesContext, ValuesContextProvider, ValuesContextClient };
