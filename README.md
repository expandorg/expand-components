# Gems components library

Set of React components to build Gems apps UI.

## Storybook and live playground
https://gemsorg.github.io/gems-components/


## installation

Gems components library is availabel as an [npm package](https://www.npmjs.com/package/@gigs/components):

```bash
npm install  @gigs/components --save
```

## Usage

```jsx
import React from 'react'
import { Button } from '@gigs/components';

const MyComponent = () => (
  <Button size="medium" theme="pink" onClick={() => console.log('click!')}>
    Hello World
  </Button>
);

```


## Development with Storybook

```bash
yarn install
yarn storybook
```
Open http://localhost:6006/


```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import panelDecorator from '../kit/panelDecorator';

storiesOf("Components/MyCustomComponent", module)
  .addDecorator(panelDecorator)
  .add("Default", () => (
    <Kind title="My Custom Component">
      <MyCustomComponent />
    </Kind>
  ))
  .add("Red", () => (
    <Kind title="My Custom Red Component">
      <MyCustomComponent color="red" />
    </Kind>
  ));
```
