
# Agreement Module

## Example
```jsx
{
  name: 'agreement',
  type: 'agreement',
  button: 'Rules',
  label: 'I Agree',
  headline: 'question title',
  modules: {
    name: 'p',
    type: 'paragraph',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  }
}
```

## Agreement properties

| Property     | type           | Required | Default | description |
| ------------ | -------------- | -------- | ------- | ----------- |
| *type*       | `agreement`    | true     | -       | module type |
| *name*       | string         | true     | -       | module name |
| *label*      | string         | true     | -       | Checkbox label |
| *button*     | string         | -        | -       | Button title |
| *headline*   | string         | -        | -       | Dialog headline |
| *content*    | string         | -        | -       | Dialog content |
| *[validation](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
