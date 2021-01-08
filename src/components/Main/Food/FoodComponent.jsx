import React from 'react';
import SearchFoodComponent from './SearchFood/SearchFoodComponent';
import { useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import FoodStats from './FoodStats/FoodStats';
import { Row, Col } from 'antd';
import FoodTableComponent from './FoodTable/FoodTableComponent';

const FoodComponent = () => {
  const foodData = useSelector(foodSelector);

  console.log(foodData);
  return (
      <div>
        <Row>
          <Col>
            <SearchFoodComponent />
          </Col>
        </Row>
        {
          foodData
            ? <FoodStats foodData={foodData} />
            : null
        }
        <FoodTableComponent />
      </div>
  );
};

export default FoodComponent;
