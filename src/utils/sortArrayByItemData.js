const sortArrayByItemData = (array) => array.sort((prevItem, nextItem) => {
  const date1 = new Date(prevItem.time);
  const date2 = new Date(nextItem.time);
  return date1 - date2;
});

export default sortArrayByItemData;
