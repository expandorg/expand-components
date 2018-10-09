
# RegionSelect Module

## Example
```jsx
{
  name: 'regionSelect',
  type: 'regionSelect',
  image: "https://pascal3.digipro.ru/images/.logo_detection/1591833.jpg",
}
```

## RegionSelect properties

| Property | type           | Required | Default | description |
| ---------| -------------- | -------- | ------- | ----------- |
| *type*   | `regionSelect` | true     | -       | module type |
| *name*   | string         | true     | -       | module name |
| *image*  | string         | true     | -       | image url   |
| *readOnly* | boolean        | false    | -       | read only    |
| *initial* | `{x1: 0,y1: 0, x2: 10, y2: 10}` | false    | null       | initial value (when readOnly used) |
| *[validation](https://gemsorg.github.io/gems-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
