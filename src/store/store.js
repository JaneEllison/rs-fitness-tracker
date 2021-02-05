import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import foodReducer from './foodReducer/foodReducer';
import exerciseReducer from './exerciseDataReducer/exerciseReducer/exerciseReducer';
import { selectedDayReducer } from './exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';
import exerciseSearchReducer from './exerciseDataReducer/exerciseSearchReducer/exerciseSearchReducer';
import foodMenuReducer from './FoodMenuReducer/foodMenuReducer';

const store = createStore(combineReducers({
  foodReducer,
  foodMenuReducer,
  firebaseReducer,
  firestoreReducer,
  exerciseReducer,
  selectedDayReducer,
  exerciseSearchReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
