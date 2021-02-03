import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  COMPLETE_EXERCISE,
  UPDATE_EXERCISE,
} from './exerciseReducerConstant';

export const exerciseAddAction = (id, text, isComplete, day) => ({
  type: ADD_EXERCISE,
  day,
  id,
  text,
  isComplete,
});

export const exerciseRemoveAction = (id, day) => ({
  type: REMOVE_EXERCISE,
  day,
  id,
});

export const exerciseCompleteAction = (id, day) => ({
  type: COMPLETE_EXERCISE,
  id,
  day,
});

export const exerciseUpdateAction = (id, text, day) => ({
  type: UPDATE_EXERCISE,
  day,
  id,
  text,
});
