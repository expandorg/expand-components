
> Animated toast component

## Usage

```jsx
import React from 'react';
import { ToastAnimated } from '@expandorg/components';

export default   ({ visible }) => (
  <ToastAnimated visible={visible} >
    <div className={styles.toastContent} >
      Animated toast
    </div>
  </ToastAnimated>
);
```

## Props

| Property     | PropType  | Required | Default Value  |
| ------------ | ----------| -------- | -------------- |
| *visible*    | bool      | -        | false          |
| *className*  | string    | -        | null           |
| *children*   | node      | true     | -              |
