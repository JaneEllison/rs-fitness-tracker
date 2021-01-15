import {
  GLOBAL_ADD_EXERCISE,
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  COMPLETE_EXERCISE,
  UPDATE_EXERCISE,
  SELECT_DAY
} from "./exerciseReducerConstant";

const initialState = {
  "Day one": {
    exercises: [
      {
        id: 11,
        text: "jumps",
        isComplete: false,
      },
    ],
  },
  "Day two": {
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
  console.log(type, 'type');
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

export const selectedDayReducer = (state=null, { day, type }) => {
  console.log(type, 'type');
  
  switch(type) {
    case SELECT_DAY:
      return day;
    default:
      return state;
  }
}

// export const globalAddReducer = (state=initialState, { id, text, day, type, isComplete }) => {
//   console.log(type, 'type', day);
//   let oldData, oldExercises, newExercises;
  
//   switch(type) {
//     case GLOBAL_ADD_EXERCISE:
//       oldData = state[day] || {};
//       oldExercises = oldData.exercises || [];
//       newExercises = {...oldData, exercises: [...oldExercises, {
//         id,
//         text,
//         isComplete
//       }]}
//       return {...state, [day]: newExercises}

//     default:
//       return state;
//   }
// }

export const exerciseAddAction = (id, text, isComplete, day) => ({
  type: ADD_EXERCISE,
  day,
  id,
  text,
  isComplete
})

export const exerciseRemoveAction = (id, day) => ({
  type: REMOVE_EXERCISE,
  day,
  id
})

export const exerciseCompleteAction = (id, day) => ({
  type: COMPLETE_EXERCISE,
  id,
  day,
})

export const exerciseUpdateAction = (id, text, day) => ({
  type: UPDATE_EXERCISE,
  day,
  id,
  text,
})

export const selectDayAction = (day) => ({
  type: SELECT_DAY,
  day,
})

// export const exerciseGlobalAddAction = (id, text, isComplete, day) => ({
//   type: GLOBAL_ADD_EXERCISE,
//   id,
//   text,
//   isComplete,
//   day,
// })

export default exerciseReducer;