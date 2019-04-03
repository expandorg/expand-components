import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Tooltip.styl';

export default Wrapped => {
  class Tooltip extends Component {
    static propTypes = {
      tooltipPosition: PropTypes.oneOf([
        'top',
        'bottom',
        'left',
        'right',
        'center',
      ]),
      tooltipOrientation: PropTypes.oneOf(['top', 'bottom', 'right']),
      tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    };

    static defaultProps = {
      tooltip: null,
      tooltipPosition: 'center',
      tooltipOrientation: 'top',
    };

    state = {
      visible: false,
    };

    handleMouseEnter = () => {
      this.setState({ visible: true });
    };

    handleMouseLeave = () => {
      this.setState({ visible: false });
    };

    render() {
      const {
        tooltip,
        tooltipPosition,
        children,
        tooltipOrientation,
        ...rest
      } = this.props;
      const className = cn(
        'gem-tooltip',
        `gem-tooltip-orientation-${tooltipOrientation}`,
        `gem-tooltip-position-${tooltipPosition}`
      );

      const childProps = {
        ...rest,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      };

      const { visible } = this.state;

      return (
        <Wrapped {...childProps}>
          {children}
          {visible && tooltip && <div className={className}>{tooltip}</div>}
        </Wrapped>
      );
    }
  }
  return Tooltip;
};
