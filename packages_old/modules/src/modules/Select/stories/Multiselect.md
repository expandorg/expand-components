
# Multiple selection Module

## Example
```jsx
{
  name: 'multiselect',
  type: 'multiselect',
  ignoreOrder: false,
  options: ['Option 1', 'Option 2', 'Option 2', 'Option 4'],
}
```

## Select properties

| Property       | type           | Required | Default | description  |
| -------------- | -------------- | -------- | --------| ------------ |
| *type*         | `select`       | true     | -       | module type  |
| *name*         | string         | true     | -       | module name  |
| *columns*      | `2`, `3`       | false    | `2`     | number of columns  |
| *options*      | `[ { caption, value }, { caption, value }... ]`   | true   | -     | array of options   |
| *readOnly*     | boolean        | false    | -       | read only    |
| *order*        | boolean        | false    | -       | consider the order of answers  |
| *[validation](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
