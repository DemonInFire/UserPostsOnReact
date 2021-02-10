import { createStore, applyMiddleware } from 'redux';
import checkReducer from '../reducers/checkReducer'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './../sagas/sagas'

let initialState = []
const sagaMiddleware = createSagaMiddleware()

const store = createStore(checkReducer, initialState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(helloSaga)

export default store