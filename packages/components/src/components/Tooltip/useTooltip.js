// @flow
import { useState, useCallback } from 'react';
import cn from 'classnames';

type Orientation = 'top' | 'bottom' | 'right';
type Position = 'top' | 'bottom' | 'left' | 'right' | 'center';

export default function useTooltip(
  orientation: Orientation = 'top',
  position: Position = 'center'
) {
  const [visible, setVisible] = useState(false);

  const onMouseEnter = useCallback(() => {
    setVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  const tooltipClassNames = cn(
    'gem-tooltip',
    `gem-tooltip-orientation-${orientation}`,
    `gem-tooltip-position-${position}`
  );

  const props = { onMouseEnter, onMouseLeave };

  return [props, visible, tooltipClassNames];
}
