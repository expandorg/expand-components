
# RegionMultiselect Module

## Example
```jsx
{
  name: 'regionMultiselect',
  type: 'regionMultiselect',
  image: "https://pascal3.digipro.ru/images/.logo_detection/1591833.jpg",
}
```

## RegionSelect properties

| Property | type           | Required | Default | description |
| ---------| -------------- | -------- | ------- | ----------- |
| *type*   | `regionMultiselect` | true     | -       | module type |
| *name*   | string         | true     | -       | module name |
| *image*  | string         | true     | -       | image url   |
| *order*  | boolean        | false    | -       | consider the order of answers  |
| *readOnly* | boolean        | false    | -       | read only    |
| *initial* | `Array<{x1: 0,y1: 0, x2: 10, y2: 10}>` | false    | []       | initial value (when readOnly used) |
| *[validation](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
