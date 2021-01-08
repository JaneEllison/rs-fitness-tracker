import React from 'react';
import FoodStatChart from './FoodStatChart';
import foodComponentConstants from '../../../../constants/foodComponentConstants';

const FooDStats = ({foodData}) => {

  const {foodStatsTypes: {FOOD_STATS_PER_100_GR}} = foodComponentConstants;

  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_protein
    } = foodData;
  const transformedFoodData = [nf_calories, nf_total_fat, nf_total_carbohydrate, nf_protein];
  console.log(FOOD_STATS_PER_100_GR);
  return (
    <div>
      <FoodStatChart stats={transformedFoodData} title={FOOD_STATS_PER_100_GR} />
    </div>
  );
};

export default FooDStats;
