const foodComponentConstants = {
  FOOD_COMPONENT_SPACING_DIRECTION: 'vertical',
  FOOD_COMPONENT_SPACING_SIZE: 'large',
  FOOD_COMPONENT_INITIAL_INTAKE_WEIGHT: 100,
  SEARCH_FIELD_PLACEHOLDER: 'Type food name',
  ADD_FOOD_TO_MENU_INTAKE_LABEL: 'Intake (grams)',
  ADD_FOOD_TO_MENU_TIME_LABEL: 'Time',
  foodStatsTypes: {
    FOOD_STATS_PER_100_GR: 'stats per 100 grams',
    FOOD_STATS_FOR_INTAKE: 'stats for intake',
  },
  foodStatsConstants: [
    {
      API_VALUE: 'nf_calories',
      TEXT_VALUE: 'kCal',
    },
    {
      API_VALUE: 'nf_total_fat',
      TEXT_VALUE: 'Fats',
    },
    {
      API_VALUE: 'nf_total_carbohydrate',
      TEXT_VALUE: 'Carbs',
    },
    {
      API_VALUE: 'nf_protein',
      TEXT_VALUE: 'Proteins',
    },
  ],
};

export default foodComponentConstants;
