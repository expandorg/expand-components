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

| Property     | PropType                   | Required | Default Value |
| ------------ | -------------------------- | -------- | ------------- |
| *children*   | `(props) => Component`     | true     | -             |
| *className*  | string                     | -        | null          |
| *size*       | small, medium, large       | -        | medium        |
| *onClick*    | func                       | -        | -             |



## Module Props

| Property       | PropType            | Required | Default Value |
| -------------- | ------------------- | -------- | ------------- |
| *module*       | Module object       | true     | -             |
| *value*        | any                 | -        | undefined     |
| *isSubmitting* | boolean             | -        | false         |
| *onChange*     | func                | true     | -             |
| *onSubmit*     | func                | -        | -             |


## Using your own module

Most simple way to add custom module to form bulder is overriding `controls` property of `Module`

```jsx
import React from 'react';
import { Form, Module, moduleControls } from '@gemsorg/components/modules';

// your custom component
class MyInputModule extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

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
const controls = {
  ...moduleControls,
  input: MyInputModule,
}

const CustomForm = ({ onSubmit }) => (
  <Form form={form} onSubmit={this.handleSubmit}>
    {moduleProps => <Module controls={controls} {...moduleProps} />}
  </Form>  
)

```


# Form example

Basic form example
