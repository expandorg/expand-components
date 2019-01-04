# Validation rules

## How to add validation rules to your module?

 You can add `validation` property to any module. Property `validation` should be defined as an object with rule names as keys and error messages as values. You can use any supported rule combinations. The user will see an error message from the first rule that was not passed

```jsx
// email field example validation example
{
  name: 'email',
  type: 'email',
  placeholder: 'Your email',
  validation: {
    isRequired: 'Email field is required',
    isEmail: 'You should write correct email address'
  }
}
```

You can define different validation rules for modules.

| Module      | Supported rules         |
| ----------- |------------------------ |
| *[Input](http://localhost:6006/?selectedKind=Form%20Builder%2FModules&selectedStory=Input)*        | `isRequired` `isNotEmpty` `isEmail` `isNumber` |
| *[Checkbox](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder%2FModules&selectedStory=Checkbox)*     | `isRequired` `isTrue`   |
| *[Select](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder%2FModules&selectedStory=Select)*       | `isRequired`            |
| *[Multiselect](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder%2FModules&selectedStory=Multiselect)*  | `isRequired`            |
| *[Dropdown](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder%2FModules&selectedStory=Dropdown)*  | `isRequired`            |
| *[RegionSelect](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder%2FModules&selectedStory=RegionSelect)*  | `isRequired`            |
| *[RegionMultiselect](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder%2FModules&selectedStory=RegionMultiselect)*  | `isRequired`            |
| *[ImageTiles](https://expandorg.github.io/expand-components/?selectedKind=Form%20Builder%2FModules&selectedStory=ImageTiles)*  | `isRequired`            |


## Supported rules

### isRequired, isNotEmpty

User should input any value.  For `select` and `multiselect` modules - pick at least one option

### isEmail
Module value should be a valid email address

### isNumber
Module value should be a valid number

### isTrue
Module value should be equal to `true`


## Validation rules playground
