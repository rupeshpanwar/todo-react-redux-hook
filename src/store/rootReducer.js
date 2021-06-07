import { combineReducers } from 'redux'
import { taskReducer, addTaskReducer } from './task/taskReducer'

const reducer = combineReducers({
    task: taskReducer,
    addTask: addTaskReducer,
})

export default reducer