# Forms bulder


## Usage

```jsx
const form = {
  fields: []
}

class Playground extends Component {
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


# Form example

Basic form example 
