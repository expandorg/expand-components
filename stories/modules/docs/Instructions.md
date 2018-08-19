
# Instructions Module

## Example
```jsx
{
  name: 'instructions',
  type: 'instructions',
  modules: [
    {
      name: 'See instructions',
      type: 'instructionsItem',
      action: 'See instructions',
      title: 'Instructions',
      modules: {
        name: 'paragraph',
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur',
      },
    },
    {
      name: 'See Rules',
      type: 'instructionsItem',
      action: 'See Rules',
      title: 'Rules',
      modules: {
        name: 'paragraph',
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur',
      }
    }
  ]
}
```

## Instructions properties

| Property     | type           | Required | Default | description |
| ------------ | -------------- | -------- | ------- | ----------- |
| *type*       | `instructions` | true     | -       | module type |
| *name*       | string         | true     | -       | module name |
| *modules*   | `module`       | true     | -       | modules     |

## InstructionsItem
 properties

| Property     | type           | Required | Default | description |
| ------------ | -------------- | -------- | ------- | ----------- |
| *type*       | `instructionsItem` | true     | -       | module type |
| *name*       | string         | true     | -       | module name |
| *action*     | string         | true     | -       | button caption |
| *title*      | string         | false    | -       | dialog title |
| *modules*   | `module`       | true     | -       | modules     |

## Playground
