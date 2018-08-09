# Forms builder

Dynamic extensible JSON powered form library for React.

## Basic Usage

```jsx
import { Form, Fields } from '@gigs/components/fields';

const form = {
  fields: []
}

class CustomForm extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <Form form={form} onSubmit={this.handleSubmit}>
        {fieldProps => (
          <Field {...fieldProps} />
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



## Field Props

| Property       | PropType            | Required | Default Value |
| -------------- | ------------------- | -------- | ------------- |
| *field*        |                     | true     | -             |
| *value*        | any                 | -        | undefined     |
| *isSubmitting* | boolean             | -        | false         |
| *onChange*     | func                | true     | -             |
| *onSubmit*     | func                | -        | -             |


## Using your own field

Most simple way to add custom field to form bulder is overriding `controls` property of `Field`

```jsx
import React from 'react';
import { Form, Fields, fieldControls } from '@gigs/components/fields';

// your custom component
class MyInputField extends Component {
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

// override input field type with MyInputField
const controls = {
  ...fieldControls,
  input: MyInputField,
}

const CustomForm = ({ onSubmit }) => (
  <Form form={form} onSubmit={this.handleSubmit}>
    {fieldProps => <Field controls={controls} {...fieldProps} />}
  </Form>  
)

```


# Form example

Basic form example
