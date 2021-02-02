function getDateStringsRange(startDateString, endDateString) {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const result = [];

  endDate.setDate(endDate.getDate() + 1);

  while (startDate < endDate) {
    result.push(startDate.toLocaleDateString('en-US'));
    startDate.setDate(startDate.getDate() + 1);
  }

  return result;
}

export default getDateStringsRange;
