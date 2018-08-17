
# Instructions Module

## Example
```jsx
{
  name: 'instructions',
  type: 'instructions',
  dialogs: [
    {
      action: 'See instructions',
      title: 'Instructions',
      content: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      action: 'See Rules',
      title: 'Rules',
      content: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ],
}
```

## Instructions properties

| Property     | type           | Required | Default | description |
| ------------ | -------------- | -------- | ------- | ----------- |
| *type*       | `instructions` | true     | -       | module type |
| *name*       | string         | true     | -       | module name |
| *dialogs*    | array          | true     | -       | dialog module |
| *dialogs[{ action }]*| string          | true     | -       | button caption |
| *dialogs[{ title }]*| string          | true     | -       | dialog title |
| *dialogs[{ content }]*| string          | true     | -       | dialog content |

## Playground
