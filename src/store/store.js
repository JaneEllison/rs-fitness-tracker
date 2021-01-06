import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './foodReducer/foodReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({
  foodReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
