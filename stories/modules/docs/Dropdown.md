
# Dropdown Module

## Example
```jsx
{
  name: 'dropdown',
  type: 'dropdown'
  placeholder: 'Select one...',
  options: [
    'Option 1',
    'Option 2',
    'Option 2',
    'Option 4',
  ]
}
```

## Dropdown properties

| Property       | type           | Required | Default | description  |
| -------------- | -------------- | -------- | --------| ------------ |
| *type*         | `dropdown`     | true     | -       | module type  |
| *name*         | string         | true     | -       | module name  |
| *placeholder*  | string         | -        | -       | placeholder  |
| *justify* | `left`, `right`, `center`, `between`  | -        | `center`       | horizontal alignment |
| *options*      | Array<string>  | true   | -     | array of options   |
| *[validation](https://gemsorg.github.io/gems-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
