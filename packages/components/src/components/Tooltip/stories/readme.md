
> Tooltip high-order component

## Limitation
Wrapped component should expose `children` as props and have top element style `position: relative`

## Usage

```jsx
import React from 'react';
import { Button as Btn, Tooltip } from '@expandorg/components';

const Button = Tooltip(Btn);

export default   ({ onClick }) => (
  <Button
    className={styles.relative}
    tooltip="This is a tooltip"
    onClick={onClick}
  >
    Hover to see tooltip
  </Button>
);
```

## Props

| Property             | PropType                  | Required | Default Value  |
| -------------------- | --------------------------| -------- | -------------- |
| *tooltip*            | string                    | -        | null           |
| *tooltipPosition*    | left, right, center       | -        | center         |
| *tooltipOrientation* | top, bottom, left, right  | -        | top            |
| *children*           | node                      | true     | -              |
