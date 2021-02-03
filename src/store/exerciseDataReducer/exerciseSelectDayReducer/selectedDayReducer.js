import SELECT_DAY from './selectedDayReducerConstant';

const selectedDayReducer = (state = null, { day, type }) => {
  switch (type) {
    case SELECT_DAY:
      return day;
    default:
      return state;
  }
};

const selectDayAction = (day) => ({
  type: SELECT_DAY,
  day,
});

export {
  selectedDayReducer,
  selectDayAction,
};
