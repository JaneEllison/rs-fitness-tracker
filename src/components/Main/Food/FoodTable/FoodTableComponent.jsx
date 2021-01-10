import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  foodMenuSelector,
  totalNutrientsSelector
} from '../../../../store/Selectors/foodMenuSelector';
import foodMenuTableColumns from './foodMenuTableColumns/foodMenuTableColumns';
import { calculateTotalNutrientsAC } from '../../../../store/FoodMenuReducer/foodMenureducer';

const FoodTableComponent = () => {
  const foodMenu = useSelector(foodMenuSelector);
  const totalNutrients = useSelector(totalNutrientsSelector);
  const columns = foodMenuTableColumns;

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(calculateTotalNutrientsAC())
  }, []);

  const foodTableData = foodMenu.map((item) => {
    return {
      ...item,
      key: item.id,
    }
  });
  console.log(foodTableData);
  return (
    <Table
      columns={columns}
      dataSource={[...foodTableData, {...totalNutrients, food_name: "Total", key: -1}]}
      scroll={{ x: 1200, y: 300 }}
      pagination={false}
    />
  );
};

export default FoodTableComponent;
