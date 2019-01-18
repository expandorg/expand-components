
# Multiple Tag Video Module

## Example
```jsx
{
  name: 'multipleTagVideo',
  type: 'multipleTagVideo',
  src: "https://www.youtube.com/watch?v=PXi3Mv6KMzY",
}
```

## Multiple Tag Video properties

| Property    | type    | Required | Default | description    |
| ----------- | ------- | -------- | ------- | -------------- |
| *type*      | `multipleTagVideo` | true  | -       | module type    |
| *name*      | string  | true     | -       | module name    |
| *src*       | string  | true     | -       | video url      |
| *startTime* | number  | -        | -       | start video from  |
| *readOnly*  | boolean | -        | false    | read only    |
| *hideControls*  | boolean | -        | false    | hide controls    |
| *playbackRate* | number [0.5, 1, 2, 4] | -        | 1       | playback rate  |
| *options*   | `['tag1', 'tag2'...]`  | -        | -       | available tags (tag should be picked with dropdown control)  |
| *[validation](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |


## Playground
