import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import { useSelector} from 'react-redux';
import {
  foodMenuSelector,
} from '../../../../store/Selectors/foodMenuSelector';
import getFoodMenuTableColumns from './foodMenuTableColumns/getFoodMenuTableColumns';
import FoodTableSummaryComponent from './FoodTableSummary/FoodTableSummaryComponent';
import transformDate from '../../../../utils/transformDate';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import FoodTableMenuTitleComponent from './FoodTableMenuTitleComponent';
import getTableConfig from './getTableConfig';
import getFoodTableData from './getFoodTableData';

const FoodTableComponent = () => {
  const [loading, toggleLoading] = useState(true);
  const foodMenu = useSelector(foodMenuSelector);
  let columns = getFoodMenuTableColumns();
  const foodTableData = getFoodTableData(foodMenu);

  useEffect(() => {
    if(checkArrayForNullUndefNaN(foodTableData)){
      toggleLoading(false);
    } else {
      toggleLoading(true);
    }
  }, [foodTableData]);

  const tableConfig = getTableConfig(foodTableData, loading, columns);

  return (
    <Table
      {...tableConfig}
    />
  );
};

export default FoodTableComponent;
