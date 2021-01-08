import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './foodReducer/foodReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import foodMenuReducer from './FoodMenuReducer/foodMenureducer';

const store = createStore(combineReducers({
  foodReducer, foodMenuReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
