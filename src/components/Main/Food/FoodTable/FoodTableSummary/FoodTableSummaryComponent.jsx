import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalNutrientsSelector } from '../../../../../store/Selectors/totalNutrientsSelector';
import { calculateTotalNutrientsAC } from '../../../../../store/FoodMenuReducer/foodMenuActionCreators';
import getAdaptiveClassNames from './getAdaptiveClassNames';

const FoodTableSummaryComponent = ({foodMenu}) => {
  const totalNutrients = useSelector(totalNutrientsSelector);
  const dispatch = useDispatch();
  const {classesLeft, classesRight} = getAdaptiveClassNames();
  useEffect(() => {
    foodMenu.length > 0
    && dispatch(calculateTotalNutrientsAC(foodMenu))
  }, [foodMenu]);
  const {
    nf_calories,
    nf_protein,
    nf_total_carbohydrate,
    nf_total_fat,
    weight,
  } = totalNutrients;

  const summaryRow = [weight, nf_calories, nf_total_fat, nf_total_carbohydrate, nf_protein];
  return (
    <>
      <Table.Summary.Row>
        <Table.Summary.Cell
          className={classesLeft}
        >Total:</Table.Summary.Cell>
        <Table.Summary.Cell/>
        {
          summaryRow.map((item, index) => {
            return <Table.Summary.Cell
                key={`${index * 2}`}
              >
                {item}
              </Table.Summary.Cell>
            }
          )
        }
        <Table.Summary.Cell
          className={classesRight}
        />
      </Table.Summary.Row>
    </>
  )
};

export default FoodTableSummaryComponent;
