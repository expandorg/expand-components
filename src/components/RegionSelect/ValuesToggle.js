import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UISwitch from '../Switch';
import Tooltip from '../Tooltip';

const Switch = Tooltip(UISwitch);

export default class ValuesToggle extends Component {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  render() {
    const { value, onToggle } = this.props;
    return (
      <div className="gem-selectregion-toggle">
        <Switch tooltip="Toggle value" value={value} onChange={onToggle} />
      </div>
    );
  }
}
