import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './foodReducer/foodReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import exerciseReducer, { selectedDayReducer } from './exerciseReducer/exerciseReducer';

const store = createStore(combineReducers({
  foodReducer,
  exerciseReducer,
  selectedDayReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
