import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import { useSelector} from 'react-redux';
import getFoodMenuTableColumns from './foodMenuTableColumns/getFoodMenuTableColumns';
import checkArrayForNullUndefNaN from '../../../../utils/checkArrayForNullUndefNaN';
import getTableConfig from './getTableConfig';
import getFoodTableData from './getFoodTableData';
import profileSelector from '../../../../store/Selectors/profileSelector';

const FoodTableComponent = () => {
  const [loading, toggleLoading] = useState(true);
  const profile = useSelector(profileSelector);
  const timeKey = new Date(Date.now()).toLocaleDateString('ru-RU');


  const foodMenu = profile.userMenus[timeKey] ? profile.userMenus[timeKey] : [];

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
