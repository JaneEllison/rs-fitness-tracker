const getFoodParamTextValue = (param, arrayOfConstants) => {
  const cb = (item) => param === item.API_VALUE;
  return arrayOfConstants.filter(cb)[0].TEXT_VALUE;
};

export default getFoodParamTextValue;
