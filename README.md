# Expand UI & Modules
[![npm version](https://img.shields.io/npm/v/@expandorg/components.svg?style=flat-square)](https://www.npmjs.com/package/@expandorg/components)
[![license](https://img.shields.io/npm/l/@expandorg/components.svg?style=flat-square)](https://www.npmjs.com/package/@expandorg/components)

Expand UI & Modules is a collection of React components, tools and guidelines for creating Gems products.
* **[Forms](https://expandorg.github.io/gems-components/?selectedKind=Form%20Builder&selectedStory=Readme&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel):** Dynamic extensible JSON powered form library for React.

* **[UI Components](https://expandorg.github.io/gems-components/?selectedKind=UI%20Components&selectedStory=Readme):** set of components such as Buttons, Panels, Menus, HOC's. General purpose components used to build gems.org web applications.


* **UI kit:** [colors](https://expandorg.github.io/gems-components/?selectedKind=Gems%20UI&selectedStory=Colors), and [typography](https://expandorg.github.io/gems-components/?selectedKind=Gems%20UI&selectedStory=Typography) used across [gems.org](https://gems.org) apps

## Documentation and live playground
Detailed documentation and forms playground is available in storybook

https://expandorg.github.io/gems-components/

## installation

Expand components library is available as an [npm package](https://www.npmjs.com/package/@expandorg/components):

```bash
npm install  @expandorg/components --save
```

## Prerequisites

Gems UI & Modules use [stylus](http://stylus-lang.com/) and [css-modules](https://github.com/css-modules/css-modules) by default to import stylesheets.
It is necessary to import `.styl` files located in `node_modules`. We recommend using webpack, but other bundlers can be configured.

Here is webpack config example
```jsx
// webpack.config.babel.js
export default (env = {}) => {
  const dev = !!env.dev;
  return {
    ...
    module: {
      rules: [
        {
          test: /^((?!\.module).)*\.styl$/,
          use: [
            'style-loader',
            'css-loader?sourceMap&importLoaders=2',
            'postcss-loader?sourceMap',
            'stylus-loader?paths[]=src',
          ],
          exclude: /node_modules\/(?!(@expandorg)\/).*/,
        },
        {
          test: /\.module\.styl$/,
          use: [
            'style-loader',
            `css-loader?sourceMap&importLoaders=2&modules&localIdentName=${dev ? '[local]__[path][name]__' : ''}[hash:base64:5]`,
            'postcss-loader?sourceMap',
            'stylus-loader?paths[]=src',
          ],
          exclude: /node_modules\/(?!(@expandorg)\/).*/,
        }
      ],
    },
  };
};

```

## Basic Usage

```jsx
import React from 'react'
import { Button } from '@expandorg/components';

const MyComponent = () => (
  <Button size="medium" theme="pink" onClick={() => console.log('click!')}>
    Hello World
  </Button>
);
```

## Form Builder Usage

```jsx
import React from 'react'
import { Form, Module } from '@expandorg/components/modules';


const form = {   // define form modules
  modules: [{
    name: "paragraph",
    type: "paragraph",
    content: "Lorem ipsum dolor sit amet"
  }]
}


class CustomForm extends Component {    // your form component
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <Form form={form} onSubmit={this.handleSubmit}>
        {moduleProps => (
          <Module {...moduleProps} />
        )}
      </Form>
    );
  }
}
```

## Development with Storybook

Install project dependencies and run storybook
```bash
yarn install
yarn storybook
```
Open http://localhost:6006/

Add story for your component to  `.storybook/config.js`
```jsx
configure(() => {
  require('../stories/components/MyCustomComponent.stories');
})
```

```jsx
// stories/components/MyCustomComponent.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import panelDecorator from '../kit/panelDecorator';

import MyCustomComponent from '../../src/components/MyCustomComponent'

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

## License

This project is licensed under the terms of [Mozilla Public License 2.0](./LICENSE).
