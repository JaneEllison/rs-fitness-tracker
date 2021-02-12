import React from 'react';
import RemoveFoodConfirmComponent from './RemoveFoodConfirmComponent';
import checkOffsetWidth from '../../../../../utils/checkOffsetWidth';
import adaptiveBreakPoints from '../../../../../constants/adaptiveBreakPoints';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';
import getHoursMinsFromTimeStr from '../../../../../utils/getHoursMinsFromTimeStr';

const getFoodMenuTableColumns = () => {
  const { BREAKPOINT_MD } = adaptiveBreakPoints;
  const {
    foodTableComponent: {
      FOOD_TABLE_WIDE_CELL_WIDTH,
      FOOD_TABLE_STANDARD_CELL_WIDTH,
    },
  } = foodComponentsConfig;
  let tableColumns = [
    {
      title: 'Food name',
      width: FOOD_TABLE_WIDE_CELL_WIDTH,
      dataIndex: 'foodName',
      key: 'food_name',
      fixed: 'left',
      sorter: (a, b) => a.food_name - b.food_name,
    },
    {
      title: 'Eating time',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'time',
      key: 'time',
      sorter: (a, b) => getHoursMinsFromTimeStr(a.time) - getHoursMinsFromTimeStr(b.time),
    },
    {
      title: 'Weight',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'weight',
      key: 'weight',
      sorter: (a, b) => a.weight - b.weight,
    },
    {
      title: 'kCal',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_calories',
      key: 'nf_calories',
      sorter: (a, b) => a.nf_calories - b.nf_calories,
    },
    {
      title: 'Fats',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_total_fat',
      key: 'nf_total_fat',
      sorter: (a, b) => a.nf_total_fat - b.nf_total_fat,
    },
    {
      title: 'Carbs',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_total_carbohydrate',
      key: 'nf_total_carbohydrate',
      sorter: (a, b) => a.nf_total_carbohydrate - b.nf_total_carbohydrate,
    },
    {
      title: 'Proteins',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_protein',
      key: 'nf_protein',
      sorter: (a, b) => a.nf_protein - b.nf_protein,
    },
    {
      title: '',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'remove',
      key: 'remove',
      fixed: 'right',
      render: (action, record) => {
        if (record.key < 0) {
          return <div />;
        }
        return (
          <RemoveFoodConfirmComponent tableRecord={record} />
        );
      },
    },
  ];

  if (checkOffsetWidth(BREAKPOINT_MD)) {
    tableColumns = tableColumns.map((item, index) => (index === 0
      ? {
        ...item,
        width: FOOD_TABLE_STANDARD_CELL_WIDTH,
        fixed: false,
      }
      : {
        ...item,
        fixed: false,
      }));
  }

  return tableColumns;
};

export default getFoodMenuTableColumns;
