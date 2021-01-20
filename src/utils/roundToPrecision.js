function roundToPrecision(value, precision = 2) {
  const p = 10 ** precision; 
  return Math.round(value * p ) / p;
}

export default roundToPrecision;