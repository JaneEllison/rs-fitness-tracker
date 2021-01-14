import style from '../FoodComponent.module.css';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import FoodStatsComponent from '../FoodStats/FoodStatsComponent';
import EmptyComponent from '../../../commonComponents/EmptyComponent';
import React from 'react';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';

const FoodInfoComponent = ({foodData, intakeWeight}) => {
  const {
    emptyComponent: {
      EMPTY_COMPONENT_IMAGE,
      EMPTY_COMPONENT_MESSAGE,
    }} = foodComponentsConfig;
  return (
    <div className={style.foodCharts}>
      {
        checkArrayForNullUndefNaN(foodData)
          ? <FoodStatsComponent foodData={foodData} intakeWeight={intakeWeight} />
          : <EmptyComponent
            image={EMPTY_COMPONENT_IMAGE}
            message={EMPTY_COMPONENT_MESSAGE}
          />
      }
    </div>
  )
};

export default FoodInfoComponent;
