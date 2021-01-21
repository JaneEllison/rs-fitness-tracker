import { SELECT_DAY } from "./selectedDayReducerConstant";

export const selectedDayReducer = (state=null, { day, type }) => {
  switch(type) {
    case SELECT_DAY:
      return day;
    default:
      return state;
  }
};

export const selectDayAction = (day) => ({
  type: SELECT_DAY,
  day
});

export default selectedDayReducer;