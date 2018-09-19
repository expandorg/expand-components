// @flow

const template = (str: string, variables: Map<string, any>) =>
  str.replace(/\$\(([^()]+)\)/g, (full, word) => {
    if (variables.has(word)) {
      return variables.get(word);
    }
    return full;
  });

export default template;
