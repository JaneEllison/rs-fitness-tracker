import React, { useState } from 'react';
import style from './FoodComponent.module.css';
import SearchFoodComponent from './SearchFood/SearchFoodComponent';
import { useSelector } from 'react-redux';
import foodSelector from '../../../store/Selectors/foodSelector';
import FoodStatsComponent from './FoodStats/FoodStatsComponent';
import { Row, Col} from 'antd';
import FoodTableComponent from './FoodTable/FoodTableComponent';
import AddFoodToMenuComponent from './addFoodTomenu/AddFoodToMenuComponent';
import checkArrayForNullUndefNaN from '../../../utils/checkArrayForNullUndefNaN';
import EmptyComponent from '../../commonComponents/EmptyComponent';

const FoodComponent = () => {

  const [intakeWeight, setIntakeWeight] = useState(100);
  const [intakeTime, setIntakeTime] = useState('');
  const foodData = useSelector(foodSelector);
  console.log(checkArrayForNullUndefNaN(foodData));
  return (
      <Row
        align="center"
        justify="space-between"
      >
        <Col span={24}>
          <Row
            className={style.searchBar}
            gutter={[40, 20]}
            align="center"
            justify="space-between"
          >
            <Col
              span={22}
              lg={{span: 12}}
            >
              <SearchFoodComponent />
            </Col>
            <Col
              span={22}
              lg={{span: 12}}
            >
              <AddFoodToMenuComponent
                foodData={foodData}
                intakeWeight={intakeWeight}
                intakeTime={intakeTime}
                changeIntakeWeight={(value) => setIntakeWeight(value)}
                changeIntakeTime={(value) => setIntakeTime(value)}
              />
            </Col>
          </Row>
          <div className={style.foodCharts}>
            {
              checkArrayForNullUndefNaN(foodData)
                ? <FoodStatsComponent foodData={foodData} intakeWeight={intakeWeight} />
                : <EmptyComponent
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  message="Search for food to see its nutrients!"
                />
            }
          </div>
          <FoodTableComponent />
        </Col>
      </Row>
  );
};

export default FoodComponent;
