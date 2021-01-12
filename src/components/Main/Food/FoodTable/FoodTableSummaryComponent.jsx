import { Table } from 'antd';
import React, { useEffect } from 'react';
import style from './SummaryCellFix.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { totalNutrientsSelector } from '../../../../store/Selectors/foodMenuSelector';
import { calculateTotalNutrientsAC } from '../../../../store/FoodMenuReducer/foodMenuActionCreators';

const FoodTableSummaryComponent = () => {
  const totalNutrients = useSelector(totalNutrientsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotalNutrientsAC())
  }, [dispatch]);
  console.log(totalNutrients);
  return (
    <>
      <Table.Summary.Row>
        <Table.Summary.Cell
          className={[style.summaryCellStickyLeft, "ant-table-cell-fix-left", "ant-table-cell-fix-left-last"]}
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
          className={[style.summaryCellStickyRight, "ant-table-cell-fix-right", "ant-table-cell-fix-right-last"]}
        />
      </Table.Summary.Row>
    </>
  )
};

export default FoodTableSummaryComponent;
