
# Select Module

## Example
```jsx
{
  name: 'select',
  type: 'select',
  options: [
    { id: 'A', caption: 'Option 1' },
    { id: 'b', caption: 'Option 2' },
    { id: '3', caption: 'Option 2' },
    { id: 'IV', caption: 'Option 4', hint: 'Hint tooltip' },
  ]
}
```

## Select properties

| Property       | type           | Required | Default | description  |
| -------------- | -------------- | -------- | --------| ------------ |
| *type*         | `select`       | true     | -       | module type  |
| *name*         | string         | true     | -       | module name  |
| *columns*      | `2`, `3`         | false    | `2`       | number of columns  |
| *options*      | [ { id, caption, hint }, { id, caption, hint }... ]   | true   | -     | array of options   |
| *[validation](https://gemsorg.github.io/gems-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
