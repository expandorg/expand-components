
> Autocomplete component

## Usage

```jsx
import React from 'react';
import { AutocompleteInput } from '@expandorg/components';

export default   ({ value, onChange, onSelect }) => (
  <AutocompleteInput
    placeholder="Type..."
    value={value}
    onChange={onChange}
    onSelect={onSelect}
    options={['list', 'of', 'options']}
  />
);
```

## Props

| Property     | PropType        | Required | Default Value  |
| ------------ | ----------------| -------- | -------------- |
| *value*      | string          | -        | ''             |
| *className*  | string          | -        | null           |
| *allowAdd*   | bool            | -        | false          |
| *clear*      | bool            | -        | false          |
| *options*    | Array<string>   | -        | []             |
| *onChange*   | func.isRequired | true     | -              |
| *onSelect*   | func            | -        | -              |
| *filterFn*   | func            | -        | containsFilter |
