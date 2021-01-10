const checkArrayForNullUndefNaN = (array) => {
  return array.every(
    (item) => item !== undefined && item !== null && !Number.isNaN(item)
  );
};

export default checkArrayForNullUndefNaN;
