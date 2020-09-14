import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import checkReducer from '../reducers/checkReducer'

let initialState = {}

const store = createStore(checkReducer, initialState, compose(
  applyMiddleware(thunk),
));

export default store