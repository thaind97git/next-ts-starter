import { combineReducers } from '@reduxjs/toolkit'
import rootReducer from './modules/root/slice'

const staticReducers = {
    root: rootReducer,
}
export const createReducer = (asyncReducers = {}) => {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    })
}
