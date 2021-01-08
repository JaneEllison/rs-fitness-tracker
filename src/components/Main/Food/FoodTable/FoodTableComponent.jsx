import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import foodMenuSelector from '../../../../store/Selectors/foodMenuSelector';
import foodMenuTableColumns from '../../../../config/foodMenuTableColumns';

const FoodTableComponent = () => {
  const foodMenu = useSelector(foodMenuSelector);
  const columns = foodMenuTableColumns;

  const foodTableData = foodMenu.map((item, index) => {
    return {
      ...item,
      key: index,
    }
  });

  console.log(foodTableData, columns);

  return (
    <Table columns={columns} dataSource={foodTableData} />
  );
};

export default FoodTableComponent;
