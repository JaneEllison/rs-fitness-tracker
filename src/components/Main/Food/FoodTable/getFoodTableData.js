
const getFoodTableData = (foodMenu) => {
  return foodMenu.map((item) => {
    return {
      ...item,
      key: item.id,
    }
  });
};

export default getFoodTableData;
