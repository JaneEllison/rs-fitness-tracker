import FoodTableMenuTitle from './FoodTableMenuTitle';
import FoodTableSummaryComponent from './FoodTableSummary/FoodTableSummaryComponent';
import React from 'react';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';

const getTableConfig = (loading, columns) => {
  const {foodTableComponent: {
    FOOD_TABLE_SIZE,
    FOOD_TABLE_SCROLL,
    FOOD_TABLE_PAGINATION,
    FOOD_TABLE_BORDERED,
    FOOD_TABLE_STICKY,
  }} = foodComponentsConfig;
  return {
    title: () => <FoodTableMenuTitle />,
    columns: columns,
    summary: () => <FoodTableSummaryComponent />,
    scroll: FOOD_TABLE_SCROLL,
    pagination: FOOD_TABLE_PAGINATION,
    bordered: FOOD_TABLE_BORDERED,
    size: FOOD_TABLE_SIZE,
    sticky: FOOD_TABLE_STICKY,
    loading: loading,
  };
};
export default getTableConfig;
