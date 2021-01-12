import React from 'react';
import RemoveFoodConfirmComponent from './RemoveFoodConfirmComponent';

const foodMenuTableColumns = [
  {
    title: 'Food name',
    width: 300,
    dataIndex: 'food_name',
    key: 'food_name',
    fixed: 'left',
  },
  {
    title: 'Eating time',
    width: 100,
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Weight',
    width: 100,
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'kCal',
    width: 100,
    dataIndex: 'nf_calories',
    key: 'nf_calories',
  },
  {
    title: 'Fats',
    width: 100,
    dataIndex: 'nf_total_fat',
    key: 'nf_total_fat',
  },
  {
    title: 'Carbs',
    width: 100,
    dataIndex: 'nf_total_carbohydrate',
    key: 'nf_total_carbohydrate',
  },
  {
    title: 'Proteins',
    width: 100,
    dataIndex: 'nf_protein',
    key: 'nf_protein',
  },
  {
    title: '',
    width: 100,
    dataIndex: 'remove',
    key: 'remove',
    fixed: 'right',
    render: (action, record) => {
      if(record.key < 0 ){
        return <div></div>
      } else {
        return (
          <RemoveFoodConfirmComponent tableRecord={record} />
        )
      }
    }
  },
];

export default foodMenuTableColumns;
