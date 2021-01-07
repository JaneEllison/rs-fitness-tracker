import React from 'react';
import { List } from 'antd';

const FooDStats = ({foods}) => {
  const {
    food_name,
    nf_calories,
    nf_total_fat,
    nf_total_carbohydrate,
    nf_sugars,
    nf_protein
    } = foods[0];
  const foodData = [food_name, nf_calories, nf_total_fat, nf_total_carbohydrate, nf_sugars, nf_protein];
  console.log(foods);
  return (
    <div>
      <List
        size="small"
        dataSource={foodData}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default FooDStats;
