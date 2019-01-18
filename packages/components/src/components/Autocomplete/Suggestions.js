import React, { Component } from 'react';

import './styles.styl';

export default class Suggestions extends Component {
  render() {
    const { children } = this.props;
    return <div className="gem-autocomplete-suggestions">{children}</div>;
  }
}
