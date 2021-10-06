export const removeProp = (key: string, state: any) => {
  return Object
    .keys(state)
    .filter(prop => prop !== key)
    .reduce((initObj: any, objKey: string) => {
      initObj[objKey] = state[objKey];
      return initObj;
  }, {});
};
