const calculateNutrientsByWeight = (weightsPer100Gr, weightActual) => {
  return Object.keys(weightsPer100Gr).reduce((acc, nutrient) => {
    acc[nutrient] = parseFloat(weightsPer100Gr[nutrient] * weightActual / 100).toFixed(2);
    return acc;
  }, {});
};

export default calculateNutrientsByWeight;
