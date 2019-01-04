
## Usage

```jsx
import React from 'react';
import { Switch } from '@expandorg/components';

export default ({ onChange, value }) => (
  <Switch
    value={value}
    onChange={onChange}
  />
);
```

## Props

| Property     | PropType | Required | Default Value |
| ------------ | -------- | -------- | ------------- |
| *value*      | bool     | -        | false         |
| *onChange*   | func     | true     | -             |
