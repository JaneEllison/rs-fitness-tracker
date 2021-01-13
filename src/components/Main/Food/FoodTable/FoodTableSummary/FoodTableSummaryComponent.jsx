import { Table } from 'antd';
import React, { useEffect } from 'react';
import style from './SummaryCellFix.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { totalNutrientsSelector } from '../../../../../store/Selectors/foodMenuSelector';
import { calculateTotalNutrientsAC } from '../../../../../store/FoodMenuReducer/foodMenuActionCreators';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';
import getAdaptiveClassNames from './getAdaptiveClassNames';

const FoodTableSummaryComponent = () => {

  const totalNutrients = useSelector(totalNutrientsSelector);
  const dispatch = useDispatch();
  const {classesLeft, classesRight} = getAdaptiveClassNames();
  useEffect(() => {
    dispatch(calculateTotalNutrientsAC())
  }, [dispatch]);

  return (
    <>
      <Table.Summary.Row>
        <Table.Summary.Cell
          className={classesLeft}
        >Total:</Table.Summary.Cell>
        <Table.Summary.Cell/>
        {
          Object.keys(totalNutrients).map((item, index) => {
              return <Table.Summary.Cell
                  key={`${index * 2}`}
                >
                  {totalNutrients[item]}
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
