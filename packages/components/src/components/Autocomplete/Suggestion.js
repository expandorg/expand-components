import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const Suggestion = ({ value, onSelect }) => (
  <button
    className="gem-autocomplete-suggestion"
    onClick={() => onSelect(value)}
  >
    {value}
  </button>
);

Suggestion.propTypes = {
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Suggestion;
