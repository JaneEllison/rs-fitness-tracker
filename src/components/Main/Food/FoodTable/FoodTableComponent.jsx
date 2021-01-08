import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import foodMenuSelector from '../../../../store/Selectors/foodMenuSelector';

const FoodTableComponent = () => {

  const foodMenu = useSelector(foodMenuSelector);
  const data = foodMenu.map((item) => {
    return {
      key: item.food_name,

    }
  });

  return (
    <Table columns={foodMenu}>

    </Table>
  );
};

export default FoodTableComponent;
