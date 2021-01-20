import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  COMPLETE_EXERCISE,
  UPDATE_EXERCISE,
} from "./exerciseReducerConstant";

const initialState = {
  "Monday": {
    exercises: [
      {
        id: 11,
        text: "jumps",
        isComplete: false,
      },
    ],
  },
  "Tuesday": {
    exercises: [
      {
        id: 12,
        text: "swim",
        isComplete: false,
      },
    ],
  },
  "Wednesday": {
    exercises: [
      {
        id: 12,
        text: "swim",
        isComplete: false,
      },
    ],
  },
  "Thursday": {
    exercises: [
      {
        id: 12,
        text: "swim",
        isComplete: false,
      },
    ],
  },
  "Friday": {
    exercises: [
      {
        id: 12,
        text: "swim",
        isComplete: false,
      },
    ],
  },
  "Saturday": {
    exercises: [
      {
        id: 12,
        text: "swim",
        isComplete: false,
      },
    ],
  },
  "Sunday": {
    exercises: [
      {
        id: 12,
        text: "swim",
        isComplete: false,
      },
    ],
  },
};

const exerciseReducer = (state=initialState, { id, text, type, day, isComplete }) => {
  let oldData, oldExercises, newExercises;
  
  switch(type) {
    case ADD_EXERCISE:
      oldData = state[day] || {};
      oldExercises = oldData.exercises || [];
      newExercises = {...oldData, exercises: [...oldExercises, {
        id,
        text,
        isComplete
      }]}
      return {...state, [day]: newExercises}
    case REMOVE_EXERCISE:
      oldData = state[day] || {};
      oldExercises = oldData.exercises || [];
      newExercises = {...oldData, exercises: oldExercises.filter(exercise => {
        return exercise.id !== id;
      })};
      return {...state, [day]: newExercises}
    case COMPLETE_EXERCISE:
      oldData = state[day] || {};
      oldExercises = oldData.exercises || [];
      newExercises = {...oldData, exercises: oldExercises.map(exercise => {
        return exercise.id === id ?  {...exercise, isComplete: !exercise.isComplete} : exercise;
      })};
      return {...state, [day]: newExercises}
    case UPDATE_EXERCISE:
      oldData = state[day] || {};
      oldExercises = oldData.exercises || [];
      newExercises = {...oldData, exercises: oldExercises.map(exercise => {
        return exercise.id === id ? text : exercise;
      })};
      return {...state, [day]: newExercises}
    
    default:
      return state;
  }
};

export default exerciseReducer;