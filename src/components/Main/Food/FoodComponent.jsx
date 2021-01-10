import React, { useState } from 'react';
import SearchFoodComponent from './SearchFood/SearchFoodComponent';
import { useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import FoodStats from './FoodStats/FoodStats';
import { Row, Col } from 'antd';
import FoodTableComponent from './FoodTable/FoodTableComponent';
import AddFoodToMenuComponent from './addFoodTomenu/AddFoodToMenuComponent';

const FoodComponent = () => {

  const [intakeWeight, setIntakeWeight] = useState(100);
  const foodData = useSelector(foodSelector);

  return (
      <div>
        <Row>
          <Col span={12}>
            <SearchFoodComponent />
          </Col>
          <Col span={10}>
            <AddFoodToMenuComponent
              foodData={foodData}
              intakeWeight={intakeWeight}
              changeIntakeWeight={(value) => setIntakeWeight(value)}
            />
          </Col>
        </Row>
        {
          foodData
            ? <FoodStats foodData={foodData} intakeWeight={intakeWeight} />
            : null
        }
        <FoodTableComponent />
      </div>
  );
};

export default FoodComponent;
