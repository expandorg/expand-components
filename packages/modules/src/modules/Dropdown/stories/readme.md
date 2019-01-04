
# Dropdown Module

## Example
```jsx
{
  name: 'dropdown',
  type: 'dropdown',
  label: 'Select one',
  placeholder: 'Select one...',
  options: [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
  ]
}
```

## Dropdown properties

| Property       | type           | Required | Default | description  |
| -------------- | -------------- | -------- | --------| ------------ |
| *type*         | `dropdown`     | true     | -       | module type  |
| *name*         | string         | true     | -       | module name  |
| *placeholder*  | string         | -        | -       | placeholder  |
| *label*        | string         | -        | -       | text label  |
| *justify* | `left`, `right`, `center`, `between`  | -        | `center`       | horizontal alignment |
| *options*      | Array<string>  | true   | -     | array of options   |
| *[validation](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
