import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './foodReducer/foodReducer';
import chartReducer from './chartReducer/chartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({
  foodReducer,
  chartReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
