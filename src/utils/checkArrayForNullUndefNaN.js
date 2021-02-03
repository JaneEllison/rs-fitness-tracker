const checkArrayForNullUndefNaN = (container) => (Array.isArray(container)
  ? container.every(
    (item) => item !== '' && item !== undefined && item !== null && !Number.isNaN(item),
  )
  : Object.keys(container).every(
    (item) => container[item] !== undefined
          && container[item] !== ''
          && container[item] !== null
          && !Number.isNaN(container[item]),
  ));

export default checkArrayForNullUndefNaN;
