const getFoodTableData = (foodMenu) => foodMenu.map((item) => ({
  ...item,
  time: item.time.slice(0, item.time.length - 3),
  key: item.id,
}));

export default getFoodTableData;
