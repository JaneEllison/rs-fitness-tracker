import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './foodReducer/foodReducer';
import userReducer from "./userReducer/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import exerciseReducer from './exerciseReducer/exerciseReducer';

import foodMenuReducer from './FoodMenuReducer/foodMenuReducer';

const store = createStore(combineReducers({
  foodReducer,
  userReducer,
  foodMenuReducer,
  exerciseReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
