import React from 'react';
import SearchFood from './SearchFood/SearchFoodComponent';
import { useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import FooDStats from './FoodStats/FoodStats';

const FoodComponent = () => {

  const data = useSelector(foodSelector);
  const { foods } = data;

  console.log(data.foods);
  return (
    <div>
      <SearchFood />
      {
        foods
          ? <FooDStats foods={foods} />
          : null
      }
    </div>
  );
};

export default FoodComponent;
