import React from 'react';
import { Table } from 'antd';
import { useSelector} from 'react-redux';
import {
  foodMenuSelector,
} from '../../../../store/Selectors/foodMenuSelector';
import foodMenuTableColumns from './foodMenuTableColumns/foodMenuTableColumns';
import FoodTableSummaryComponent from './FoodTableSummaryComponent';

const FoodTableComponent = () => {
  const foodMenu = useSelector(foodMenuSelector);
  const columns = foodMenuTableColumns;
  const foodTableData = foodMenu.map((item) => {
    return {
      ...item,
      key: item.id,
    }
  });

  return (
    <Table
      columns={columns}
      dataSource={[...foodTableData]}
      summary={() => <FoodTableSummaryComponent />}
      scroll={{ x: 1200, y: 400 }}
      pagination={false}
      bordered={true}
      size="middle"
    />
  );
};

export default FoodTableComponent;
