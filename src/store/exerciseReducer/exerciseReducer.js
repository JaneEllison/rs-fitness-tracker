import { ADD_EXERCISE, REMOVE_EXERCISE } from './exerciseReducerConstant';

// const initialState = {
//   exercises: {
//     name: 'jumps',
//   },
// };

// const initialState = [
//   {
//     day: 'Day one',
//     exercises: [{
//       id: 11,
//       text: 'jumps',
//     }],
//   }
// ];
const initialState = {
  "Day one": {
    exercises: [
      {
        id: 11,
        text: "jumps",
      },
    ],
  },
  "Day two": {
    exercises: [
      {
        id: 12,
        text: "swim",
      },
    ],
  },
};

const exerciseReducer = (state=initialState, { id, text, type, day }) => {
  console.log(type, 'type');
  let oldData, oldExercises, newExercises;
  switch(type) {
    case ADD_EXERCISE:
      oldData = state[day] || {};
      oldExercises = oldData.exercises || [];
      newExercises = {...oldData, exercises: [...oldExercises, {
        id,
        text,
      }]}
      return {...state, [day]: newExercises}
    case REMOVE_EXERCISE:
      oldData = state[day] || {};
      oldExercises = oldData.exercises || [];
      newExercises = {...oldData, exercises: oldExercises.filter(exercise => {

        return exercise.id !== id;
      })};
      console.log(oldData, newExercises, day);
      return {...state, [day]: newExercises}
    default:
      return state;
  }
};

// const exerciseReducer = (state=initialState, action) => {
//   switch(action.type){
//     case ADD_EXERCISE:
//       return {...state, exercises: [...state.exercises, action.payload]};
//     case REMOVE_EXERCISE:
//       return [...state].filter(exercise => exercise.id !== id);
//     default:
//       return {...state};
//   }
// };

// export const exerciseAction = (data) => ({
//   type: ADD_EXERCISE,
//   payload: data
// })

export const exerciseAction = (id, text, day) => ({
  type: ADD_EXERCISE,
  day,
  id,
  text,
})

export const exerciseRemoveAction = (id, day) => ({
  type: REMOVE_EXERCISE,
  day,
  id
})

// export const exerciseUpdateAction = (id) => ({
//   type: UPDATE_EXERCISE,
//   id
// })


export default exerciseReducer;