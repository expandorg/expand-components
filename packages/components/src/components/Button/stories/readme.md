
> Button component

## Usage

```jsx
import React from 'react';
import { Button } from '@expandorg/components';

export default   ({ onClick }) => (
  <Button onClick={onClick} theme={theme} disabled={disabled} >
    Hello Button
  </Button>
);
```

## Props

| Property     | PropType                | Required | Default Value |
| ------------ | ----------------------- | -------- | ------------- |
| *children*   | node                    | true     | -             |
| *className*  | string                  | -        | null          |
| *size*       | small, medium, large    | -        | medium        |
| *onClick*    | func                    | -        | -             |
| *theme*      | pink, white, transparent, aqua, blue, link, none  | -  | pink  |
