import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import { getSearchDataFromAPI } from '../../../store/foodReducer/foodReducer';

const SearchFood = () => {
  const [foodToSearch, setFoodToSearch] = useState('');
  const data = useSelector(foodSelector);
  const { foods } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    foodToSearch && dispatch(getSearchDataFromAPI(foodToSearch));
  }, [foodToSearch]);
  console.log(data.foods);
  return (
    <div>
      <input
        onChange={(event) => setFoodToSearch(event.target.value)}
        type="text"
        value={foodToSearch}
      />
      {
        foods
          ? foods.map(item => <div key={item.fdcId}>{item.description}</div>)
          : null
      }
    </div>
  );

};

export default SearchFood;
