import SET_CHART_PARAMS from './chartReducerActionTypes';

const initialState = {
  checkedValues: ['weightHistory', 'caloriesHistory'],
}

export const setParams = (arr) => ({
  type: SET_CHART_PARAMS,
  payload: arr,
});

export default function chartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHART_PARAMS:
      return { 
        ...state, 
        checkedValues: [...action.payload],
      };
    default:
      return {...state};
  }
}