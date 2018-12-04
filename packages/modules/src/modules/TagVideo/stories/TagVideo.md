
# Tag Video Module

## Example
```jsx
{
  name: 'tagVideo',
  type: 'tagVideo',
  options: [
    'Movement1',
    'Movement2',
    'Movement3',
    'Movement4',
    'Movement5',
    'Movement7',
    'Movement8',
    'Movement9',
  ],
  src: "https://www.youtube.com/watch?v=PXi3Mv6KMzY",
}
```

## Tag Video properties

| Property    | type    | Required | Default | description    |
| ----------- | ------- | -------- | ------- | -------------- |
| *type*      | `tagVideo` | true  | -       | module type    |
| *name*      | string  | true     | -       | module name    |
| *src*       | string  | true     | -       | video url      |
| *startTime* | number  | -        | -       | start video from  |
| *playbackRate* | number [0.5, 1, 2, 4] | -        | 1       | playback rate  |
| *readOnly*  | boolean | -        | false   | read only    |
| *initial*   | `{start: 0, end: 10, tag: 'tag name'}` | -    | null       | initial value (when readOnly used) |
| *options*   | `['tag1', 'tag2'...]`  | -        | -       | available tags (tag should be picked with dropdown control)  |
| *[validation](https://gemsorg.github.io/gems-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |


## Playground
