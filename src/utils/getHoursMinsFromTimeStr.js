const getHoursMinsFromTimeStr = (timeStr) => {
  const hours = parseInt(timeStr.slice(0, timeStr.length - 3), 10);
  const mins = parseInt(timeStr.slice(3, timeStr.length), 10);
  return hours + (mins / 60);
};

export default getHoursMinsFromTimeStr;
