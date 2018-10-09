import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Switch as UISwitch, Tooltip } from '@gemsorg/components';

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
        <Switch tooltip="Toggle boxes" value={value} onChange={onToggle} />
      </div>
    );
  }
}
