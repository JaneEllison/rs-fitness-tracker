const filterMenuItemsForDate = (date, items) => items.filter((item) => {
  const itemDate = new Date(item.time);
  return date.getDate() === itemDate.getDate();
});

export default filterMenuItemsForDate;
