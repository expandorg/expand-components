
> Input component

## Usage

```jsx
import React from 'react';
import { Input } from '@gigs/components';

export default   ({ value, onChange }) => (
  <Input
    placeholder="Type..."
    value={value}
    onChange={onChange}
  />
);
```

## Props

| Property     | PropType  | Required | Default Value  |
| ------------ | ----------| -------- | -------------- |
| *value*      | string    | -        | ''             |
| *className*  | string    | -        | null           |
| *onChange*   | func      | true     | -              |
| Native input props | -   | -        | -              |
