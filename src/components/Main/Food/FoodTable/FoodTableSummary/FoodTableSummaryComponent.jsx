import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import totalNutrientsSelector from '../../../../../store/Selectors/totalNutrientsSelector';
import calculateTotalNutrientsAC from '../../../../../store/FoodMenuReducer/foodMenuActionCreators';
import getAdaptiveClassNames from './getAdaptiveClassNames';

const FoodTableSummaryComponent = ({ foodMenu }) => {
  const totalNutrients = useSelector(totalNutrientsSelector);
  const dispatch = useDispatch();
  const { classesLeft, classesRight } = getAdaptiveClassNames();
  const {
    nf_calories: nfCalories,
    nf_protein: nfProtein,
    nf_total_carbohydrate: nfTotalCarbohydrate,
    nf_total_fat: nfTotalFat,
    weight,
  } = totalNutrients;

  const summaryRow = [weight, nfCalories, nfProtein, nfTotalCarbohydrate, nfTotalFat];
  useEffect(() => {
    if (foodMenu.length > 0) {
      dispatch(calculateTotalNutrientsAC(foodMenu));
    }
  }, [foodMenu]);

  return (
    <>
      <Table.Summary.Row>
        <Table.Summary.Cell
          className={classesLeft}
        >
          Total:

        </Table.Summary.Cell>
        <Table.Summary.Cell />
        {
          summaryRow.map((item, index) => (
            <Table.Summary.Cell
              key={`${index * 2}`}
            >
              {item}
            </Table.Summary.Cell>
          ))
        }
        <Table.Summary.Cell
          className={classesRight}
        />
      </Table.Summary.Row>
    </>
  );
};

FoodTableSummaryComponent.propTypes = {
  foodMenu: PropTypes.array.isRequired,
};

export default FoodTableSummaryComponent;
