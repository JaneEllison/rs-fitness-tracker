const getFoodTableData = (foodMenu) => foodMenu.map((item) => ({
  ...item,
  key: item.id,
}));

export default getFoodTableData;
