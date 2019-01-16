
# Select Module

## Example
```jsx
{
  name: 'select',
  type: 'select',
  idType: 'small',
  options: ['Option 1', 'Option 2', 'Option 2', 'Option 4'],
}
```


## Select properties

| Property       | type           | Required | Default | description  |
| -------------- | -------------- | -------- | --------| ------------ |
| *type*         | `select`       | true     | -       | module type  |
| *name*         | string         | true     | -       | module name  |
| *idType*       | `small`, `capital`, `roman`, `numerals` | false    | numerals       | enumerator type  |
| *columns*      | `2`, `3`       | false    | `2`     | number of columns  |
| *options*      | [ { value, caption }, { caption }... ]   | true   | -     | array of options   |
| *readOnly*     | boolean        | -        | false   | read only    |
| *[validation](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
