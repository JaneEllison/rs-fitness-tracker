const getFoodParamTextValue = (param, arrayOfConstants) => {
  return arrayOfConstants.filter((item) => param === item.API_VALUE)[0].TEXT_VALUE;
};

export default getFoodParamTextValue;
