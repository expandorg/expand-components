import React, { Component } from 'react';

import './AutocompleteInput.styl';

export default class Suggestions extends Component {
  render() {
    const { children } = this.props;
    return <div className="gem-autocomplete-suggestions">{children}</div>;
  }
}
