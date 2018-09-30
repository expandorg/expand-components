// @flow
type OptionType = {
  value: number | string,
  id: ?number | ?string,
  caption: ?string,
  hint: ?any,
};

const formatItem = (option: string | Object): OptionType => {
  if (typeof option !== 'object') {
    return { value: option, id: null, caption: option, hint: null };
  }
  const { value, caption, hint, id } = option;
  let val = value;
  if (typeof val === 'undefined') {
    val = typeof id !== 'undefined' ? id : caption;
  }
  return {
    value: val,
    id,
    caption,
    hint,
  };
};

export default formatItem;
