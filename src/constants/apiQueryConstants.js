const apiQueryConstants = {
  foodDataCenterEndpoints: {
    searchFoodEndpoint: 'https://api.nal.usda.gov/fdc/v1/foods/search',
  },
  nutritionixEndpoints: {
    SEARCH_NUTRIENTS_FOR_FOOD_ENDPOINT: 'https://trackapi.nutritionix.com/v2/natural/nutrients'
  },
  foodDataCenterDataTypes: {
    Foundation: 'Foundation',
    Branded: 'Branded',
    Survey: 'Survey (FNDDS)',
    Legacy: 'SR Legacy'
  },
  ERROR_FLAG: 'ERROR',
};

export default apiQueryConstants;
