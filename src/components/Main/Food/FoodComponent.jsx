import React from 'react';
import SearchFoodComponent from './SearchFood/SearchFoodComponent';
import { useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import FoodStats from './FoodStats/FoodStats';
import { Row, Col } from 'antd';
import FoodTableComponent from './FoodTable/FoodTableComponent';
import AddFoodToMenuComponent from './addFoodTomenu/AddFoodToMenuComponent';

const FoodComponent = () => {

  const foodData = useSelector(foodSelector);
  console.log(foodData);

  return (
      <div>
        <Row>
          <Col span={12}>
            <SearchFoodComponent />
          </Col>
          <Col span={10}>
            <AddFoodToMenuComponent foodData={foodData} />
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
