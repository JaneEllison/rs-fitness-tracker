import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './foodReducer/foodReducer';
import userReducer from "./userReducer/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import foodMenuReducer from './FoodMenuReducer/foodMenuReducer';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

const store = createStore(combineReducers({
  foodReducer,
  userReducer,
  foodMenuReducer,
  firebaseReducer,
  firestoreReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
