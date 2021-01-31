const getFoodParamTextValue = (param, arrayOfConstants) => {
  console.log(arrayOfConstants.filter((item) => param === item.API_VALUE), param, arrayOfConstants);
  return arrayOfConstants.filter((item) => param === item.API_VALUE)[0].TEXT_VALUE;
};

export default getFoodParamTextValue;
