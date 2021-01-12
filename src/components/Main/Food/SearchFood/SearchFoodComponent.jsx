import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getSearchDataFromAPI } from '../../../../store/foodReducer/foodReducer';
import { Input } from 'antd';
import foodComponentConstants from '../../../../constants/foodComponentConstants';

const SearchFoodComponent = () => {
  const {SEARCH_FIELD_PLACEHOLDER} = foodComponentConstants;
  const {Search} = Input;
  const [foodToSearch, setFoodToSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    foodToSearch.length > 0 && dispatch(getSearchDataFromAPI(foodToSearch));
  }, [foodToSearch]);

  return (
    <Search
      onSearch={(value) => setFoodToSearch(value)}
      type="text"
      placeholder={SEARCH_FIELD_PLACEHOLDER}
    />
  );
};

export default SearchFoodComponent;
