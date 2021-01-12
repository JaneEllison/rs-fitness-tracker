import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import { useSelector} from 'react-redux';
import {
  foodMenuSelector,
} from '../../../../store/Selectors/foodMenuSelector';
import foodMenuTableColumns from './foodMenuTableColumns/foodMenuTableColumns';
import FoodTableSummaryComponent from './FoodTableSummaryComponent';
import transformDate from '../../../../utils/transformDate';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import FoodTableMenuTitle from './FoodTableMenuTitle';

const FoodTableComponent = () => {
  const [loading, toggleLoading] = useState(true);
  const foodMenu = useSelector(foodMenuSelector);
  const columns = foodMenuTableColumns;
  const foodTableData = foodMenu.map((item) => {
    console.log(item.time);
    return {
      ...item,
      time: transformDate(item.time),
      key: item.id,
    }
  });

  useEffect(() => {
    if(checkArrayForNullUndefNaN(foodTableData)){
      toggleLoading(false);
    } else {
      toggleLoading(true);
    }
  }, [foodTableData]);

  return (
    <Table
      title={() => <FoodTableMenuTitle />}
      columns={columns}
      dataSource={[...foodTableData]}
      summary={() => <FoodTableSummaryComponent />}
      scroll={{ x: 1000, y: 400}}
      pagination={false}
      bordered={true}
      size="middle"
      sticky={true}
      loading={loading}
    />
  );
};

export default FoodTableComponent;
