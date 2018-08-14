// @flow

const getAnswrId = (option: string | Object) => {
  if (typeof option === 'string') {
    return option;
  }
  return option.id;
};

export default getAnswrId;
