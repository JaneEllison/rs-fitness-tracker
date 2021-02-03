import React from 'react';
import PropTypes from 'prop-types';
import style from '../FoodComponent.module.css';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import FoodStatsComponent from '../FoodStats/FoodStatsComponent';
import EmptyComponent from '../../../commonComponents/EmptyComponent';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';

const FoodInfoComponent = ({ foodData, intakeWeight }) => {
  const {
    emptyComponent: {
      EMPTY_COMPONENT_IMAGE,
      EMPTY_COMPONENT_MESSAGE,
    },
  } = foodComponentsConfig;
  return (
    <div className={style.foodCharts}>
      {
        checkArrayForNullUndefNaN(foodData)
          ? <FoodStatsComponent foodData={foodData} intakeWeight={intakeWeight} />
          : (
            <EmptyComponent
              image={EMPTY_COMPONENT_IMAGE}
              message={EMPTY_COMPONENT_MESSAGE}
            />
          )
      }
    </div>
  );
};

FoodInfoComponent.propTypes = {
  foodData: PropTypes.arrayOf([]).isRequired,
  intakeWeight: PropTypes.number.isRequired,
};

export default FoodInfoComponent;
