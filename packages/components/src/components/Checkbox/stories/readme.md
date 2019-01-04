
## Usage

```jsx
import React from 'react';
import { Checkbox } from '@expandorg/components';

export default ({ onChange }) => (
  <Checkbox
    name="test"
    label="Some label"
    onChange={onChange}
  />
);
```

## Props

| Property     | PropType | Required | Default Value |
| ------------ | -------- | -------- | ------------- |
| *name*       | string   | true     | -             |
| *label*      | string   | -        | ''            |
| *value*      | bool     | -        | -             |
| *onChange*   | func     | true     | -             |
