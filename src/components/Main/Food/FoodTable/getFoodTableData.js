import transformDate from '../../../../utils/transformDate';

const getFoodTableData = (foodMenu) => {
  return foodMenu.map((item) => {
    return {
      ...item,
      time: transformDate(item.time),
      key: item.id,
    }
  });
};

export default getFoodTableData;
