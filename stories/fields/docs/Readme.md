# Forms builder

## Basic Usage

```jsx
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
```jsx

class MyField extends Component {  
  render() {  
    const { field, value, onChange } = this.props;
    switch (field.type) {
      case: 'input' :
        return <MyInput {...field} value={value} onChange={onChange} />;
      case: 'autcomplete' :
        return <AutocompleteField {...field} value={value} onChange={onChange} />;
      default:
        break;
    }
    return <Field {...this.props} />
  }
}

const CustomForm = ({ onSubmit }) => (
  <Form form={form} onSubmit={this.handleSubmit}>
    {fieldProps => <MyField {...fieldProps} />}
  </Form>  
)

```


# Form example

Basic form example
