const checkArrayForNullUndef = (array) => {
  return array.every((item) => item !== undefined && item !== null);
};

export default checkArrayForNullUndef;
