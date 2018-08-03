
> Dialog component

## Usage

```jsx
import React from 'react';
import { Dialog, DialogHeadline } from '@gigs/components';

export default   ({ value, onChange, onChange }) => (
  <Dialog onHide={onToggle} visible={visible} contentLabel="test" >
    <DialogHeadline>Dialog header</DialogHeadline >
    <div className={styles.dialogContent} >
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text
    </div>
  </Dialog>
);
```

## Dialog Props

| Property       | PropType | Required | Default Value  |
| -------------- | ---------| -------- | -------------- |
| *visible       | bool     | -        | false          |
| *modalClass    | string   | -        | null           |
| *overlayClass  | string   | -        | null           |
| *contentLabel  | string   | true     | -              |
| *hideButton    | bool     | -        | false          |
| *onHide        | func     | -        | -              |


## DialogHeadline Props

| Property     | PropType | Required | Default Value  |
| ------------ | ---------| -------- | -------------- |
| *className   | string   | -        | null           |
