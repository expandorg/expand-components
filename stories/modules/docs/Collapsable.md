
# Collapsable Module

## Example
```jsx
{
  name: "collapsable",
  type: "collapsable",
  header: 'Click to Expand/Collapse',
  children: {
    type: 'article',
    name: 'article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
  },
}
```

## Collapsable properties

| Property     | type           | Required | Default | description |
| ------------ | -------------- | -------- | ------- | ----------- |
| *type*       | `collapsable`  | true     | -       | module type |
| *name*       | string         | true     | -       | module name |
| *header*     | string         | true     | -       | Header text |
| *expanded*   | bool           | -        | false   | initial state |
| *chidlren*   | *module/modules*  | true     | -       | nested component |

## Playground
