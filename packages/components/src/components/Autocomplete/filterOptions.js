// @flow

export const containsFilter = (
  options: Array<string>,
  query: string
): Array<string> => {
  if (!query) {
    return options;
  }
  return options.filter(
    (o) => o.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};

export const startWithFilter = (
  options: Array<string>,
  query: string
): Array<string> => {
  if (!query) {
    return options;
  }
  return options.filter((o) => o.toLowerCase().startsWith(query.toLowerCase()));
};
