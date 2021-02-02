const calculateNutrientsByWeight = (weightsPer100Gr, weightActual) => {
  const keys = Object.keys(weightsPer100Gr);
  return keys.reduce((acc, nutrient) => {
    const val = ((weightsPer100Gr[nutrient] * weightActual) / 100).toFixed(2);
    acc[nutrient] = parseFloat(val);
    return acc;
  }, {});
};

const calculateNutrientsByWeightForArray = (weightsPer100Gr, weightActual) => weightsPer100Gr.map(
  (nutrient) => parseFloat(((nutrient * weightActual) / 100).toFixed(2)),
);

export {
  calculateNutrientsByWeight,
  calculateNutrientsByWeightForArray,
};
