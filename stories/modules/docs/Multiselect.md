
# Multiple selection Module

## Example
```jsx
{
  name: 'multiselect',
  type: 'multiselect',
  options: [
    { id: 'A', caption: 'Option 1' },
    { id: 'b', caption: 'Option 2' },
    { id: '3', caption: 'Option 2' },
    { id: 'IV', caption: 'Option 4' },
  ]
}
```

## Select properties

| Property       | type           | Required | Default | description  |
| -------------- | -------------- | -------- | --------| ------------ |
| *type*         | 'select'       | true     | -       | module type  |
| *name*         | string         | true     | -       | module name  |
| *options*      | [ { id, caption }, { id, caption }... ]   | true   | -     | array of options   |


## Playground
