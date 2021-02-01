import FoodTableMenuTitleComponent from './FoodTableMenuTitleComponent';
import FoodTableSummaryComponent from './FoodTableSummary/FoodTableSummaryComponent';
import React from 'react';
import foodComponentsConfig from '../../../../config/foodComponentsConfig';

const getTableConfig = (foodTableData, foodMenu, loading, columns) => {
  console.log(foodMenu);
  const {foodTableComponent: {
    FOOD_TABLE_SIZE,
    FOOD_TABLE_SCROLL,
    FOOD_TABLE_PAGINATION,
    FOOD_TABLE_BORDERED,
    FOOD_TABLE_STICKY,
  }} = foodComponentsConfig;
  return {
    title: () => <FoodTableMenuTitleComponent />,
    columns: columns,
    dataSource:[...foodTableData],
    summary: () => <FoodTableSummaryComponent foodMenu={foodMenu} />,
    scroll: FOOD_TABLE_SCROLL,
    pagination: FOOD_TABLE_PAGINATION,
    bordered: FOOD_TABLE_BORDERED,
    size: FOOD_TABLE_SIZE,
    sticky: FOOD_TABLE_STICKY,
    loading: loading,
  };
};
export default getTableConfig;
