# Forms builder

Dynamic extensible JSON powered form library for React.

## Basic Usage

```jsx
import { Form, Module } from '@gemsorg/components/modules';

const form = {
  modules: []
}

class CustomForm extends Component {
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

## Form Props

| Property     | PropType                   | Required | Default Value | Description  |
| ------------ | -------------------------- | -------- | ------------- | ------------ |
| *children*   | `(props) => Component`     | true     | -             |              |
| *form*       | `{ modules: []}`           | true     | null          |              |
| *className*  | string                     | -        | null          |              |
| *validation* | boolean                    | -        | true          | frontend validation |
| *report*     | boolean                    | -        | false         | display report bug  |
| *variables*  |  Object                    | -        | null          | form variables map |
| *isSubmitting*   | boolean                | -        | false         | form is sumbitting |
| *onSubmit*   | func                       | -        | -             | form submit handlrer  |
| *onModuleError* | func                    | -        | -             | form report  |



## Module Props

| Property       | PropType            | Required | Default Value |
| -------------- | ------------------- | -------- | ------------- |
| *module*       | Module object       | true     | -             |
| *value*        | any                 | -        | undefined     |
| *isSubmitting* | boolean             | -        | false         |
| *onChange*     | func                | true     | -             |
| *onSubmit*     | func                | true     | -             |
| *onModuleError* | func                | -        | report module error |
| *controls*     | Object              | -        | `moduleControls` |
| *renderModules*| func                | -        | inner module render  |


## `Form` and `Module` types

```jsx

declare type Module = {
  name: string,
  type: string,
  modules?: Array<Module>,
  [key: string]: Module | Array<Module> | string | Object | number | boolean,
};

declare type Form = {
  modules: Array<Module>,
}

```


## Using your own module

Most simple way to add custom module to form builder is overriding `controls` property of `Module`

```jsx
import React from 'react';
import { Form, Module, moduleControls } from '@gemsorg/components/modules';

// your custom component
class MyInputModule extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static module = {
    type: 'input'
  }

  handleChange = ({ target }) => {
    const { name, onChange } = this.props;
    onChange(name, target.value);
  };

  render() {
    const { type, value } = this.props;
    return  <input type={inputType} onChange={this.handleChange} value={value} />;
  }
}

// override input module type with MyInputModule
const controls = [
  ...moduleControls,
  MyInputModule,
]

const CustomForm = ({ onSubmit }) => (
  <Form form={form} onSubmit={this.handleSubmit} controls={controls}>
    {moduleProps => <Module  {...moduleProps} />}
  </Form>  
)

```


# Form example

Basic form example
