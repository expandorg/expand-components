// @flow
type OptionType = {
  id: string | number,
  value: number | string,
  caption: ?string,
};

const formatItem = (option: string, id: string): OptionType => ({
  value: option,
  id,
  caption: option,
});

export default formatItem;
