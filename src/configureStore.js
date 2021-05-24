import { createStore } from 'redux'
import createRootReducer from './reducers'

const preloadedState = {}

const store = createStore( createRootReducer() ,
preloadedState)
export default store;
