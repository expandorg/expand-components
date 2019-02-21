import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import formProps from './formProps';

const ValuesContext = createContext(null);

class ValuesContextProvider extends Component {
  static propTypes = {
    form: formProps.isRequired,
    values: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    values: null,
  };

  render() {
    const { values, form, children } = this.props;

    return (
      <ValuesContext.Provider value={{ form, values }}>
        {children}
      </ValuesContext.Provider>
    );
  }
}

const ValuesContextClient = ({ children }) => (
  <ValuesContext.Consumer>{data => children(data)}</ValuesContext.Consumer>
);

export { ValuesContext, ValuesContextProvider, ValuesContextClient };
