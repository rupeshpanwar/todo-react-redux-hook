import { combineReducers } from 'redux'
import { taskReducer, addTaskReducer, deleteTaskReducer } from './task/taskReducer'

const reducer = combineReducers({
    task: taskReducer,
    addTask: addTaskReducer,
    deleteTask: deleteTaskReducer
})

export default reducer