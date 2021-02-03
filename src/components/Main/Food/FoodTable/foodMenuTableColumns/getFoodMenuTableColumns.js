import React from 'react';
import RemoveFoodConfirmComponent from './RemoveFoodConfirmComponent';
import checkOffsetWidth from '../../../../../utils/checkOffsetWidth';
import adaptiveBreakPoints from '../../../../../constants/adaptiveBreakPoints';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';

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
    },
    {
      title: 'Eating time',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Weight',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'kCal',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_calories',
      key: 'nf_calories',
    },
    {
      title: 'Fats',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_total_fat',
      key: 'nf_total_fat',
    },
    {
      title: 'Carbs',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_total_carbohydrate',
      key: 'nf_total_carbohydrate',
    },
    {
      title: 'Proteins',
      width: FOOD_TABLE_STANDARD_CELL_WIDTH,
      dataIndex: 'nf_protein',
      key: 'nf_protein',
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
