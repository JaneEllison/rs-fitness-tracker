import React from 'react';
import RemoveFoodConfirm from './RemoveFoodConfirm';

const foodMenuTableColumns = [
  {
    title: 'Food name',
    width: 400,
    dataIndex: 'food_name',
    key: 'food_name',
    fixed: 'left',
  },
  {
    title: 'Weight',
    width: 100,
    dataIndex: 'weight',
    key: 'weight',
    fixed: 'left',
  },
  {
    title: 'kCal',
    width: 100,
    dataIndex: 'nf_calories',
    key: 'nf_calories',
    fixed: 'left',
  },
  {
    title: 'Fats',
    width: 100,
    dataIndex: 'nf_total_fat',
    key: 'nf_total_fat',
    fixed: 'left',
  },
  {
    title: 'Carbs',
    width: 100,
    dataIndex: 'nf_total_carbohydrate',
    key: 'nf_total_carbohydrate',
    fixed: 'left',
  },
  {
    title: 'Proteins',
    width: 100,
    dataIndex: 'nf_protein',
    key: 'nf_protein',
    fixed: 'left',
  },
  {
    title: '',
    width: 100,
    dataIndex: 'remove',
    key: 'remove',
    fixed: 'left',
    render: (action, record) => {
      if(record.key < 0 ){
        return <div></div>
      } else {
        return (
          <RemoveFoodConfirm tableRecord={record} />
        )
      }
    }
  },
];

export default foodMenuTableColumns;
