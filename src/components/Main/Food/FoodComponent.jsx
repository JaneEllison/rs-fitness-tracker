import React from 'react';
import SearchFood from './SearchFood/SearchFoodComponent';
import { useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import FooDStats from './FoodStats/FoodStats';

const FoodComponent = () => {

  const foodData = useSelector(foodSelector);

  console.log(foodData);
  return (
    <div>
      <SearchFood />
      {
        foodData
          ? <FooDStats foodData={foodData} />
          : null
      }
    </div>
  );
};

export default FoodComponent;
