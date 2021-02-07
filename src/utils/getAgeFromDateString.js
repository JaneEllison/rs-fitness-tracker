function getAgeFromDateString(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  const months = today.getMonth() - birthDate.getMonth();
  const days = today.getDate() - birthDate.getDate();
  const years = today.getFullYear() - birthDate.getFullYear();

  const isMonthLess = months < 0;
  const isDaysLess = months === 0 && days < 0;

  return (isMonthLess && isDaysLess) ? years - 1 : years;
}

export default getAgeFromDateString;
