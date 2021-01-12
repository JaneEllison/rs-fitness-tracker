const checkArrayForNullUndefNaN = (container) => {
  return Array.isArray(container) ?
   container.every(
    (item) => item !== '' && item !== undefined && item !== null && !Number.isNaN(item)
  )
    : Object.keys(container).every(
      (item) => {
        return container[item] !== undefined
          && container[item] !== null
          && !Number.isNaN(container[item])
      }
    )
};

export default checkArrayForNullUndefNaN;
