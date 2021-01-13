function getDateStringsRange(startDateString, endDateString) {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const result = [];

  while (startDate < endDate) {
    result.push(startDate.toLocaleDateString('ru-RU'));
    startDate.setDate(startDate.getDate() + 1);
  }

  return result;
}

export default getDateStringsRange;