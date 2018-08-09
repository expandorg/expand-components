
# Select Field

## Example
```jsx
{
  name: 'select',
  type: 'select',
  options: [
    { id: 'A', caption: 'Option 1' },
    { id: 'b', caption: 'Option 2' },
    { id: '3', caption: 'Option 2' },
    { id: 'IV', caption: 'Option 4' },
  ]
}
```

## Field properties

| Property       | type           | Required | Default | description |
| -------------- | -------------- | -------- | --------| ----------- |
| *type*         | 'select'       | true     | -       | field type  |
| *name*         | string         | true     | -       | field name  |
| *options*      | [ { id, caption }, { id, caption }... ]   | true   | -     | array of options   |


## Playground
