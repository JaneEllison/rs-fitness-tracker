import roundToPrecision from './roundToPrecision';

function getLinearRange(startValue, endValue, length) {
  const increment = (endValue - startValue) / (length - 1);

  return [...new Array(length)].map((_, index) => {
    return roundToPrecision(startValue + increment * index);
  })
}

export default getLinearRange;