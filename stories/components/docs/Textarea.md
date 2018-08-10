
> Textarea component

## Usage

```jsx
import React from 'react';
import { Textarea } from '@gemsorg/components';

export default   ({ value, onChange }) => (
  <Textarea
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
| Native props | -         | -        | -              |
