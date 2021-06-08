import { combineReducers } from 'redux'
import { taskReducer, addTaskReducer, deleteTaskReducer, updateTaskReducer } from './task/taskReducer'

const reducer = combineReducers({
    task: taskReducer,
    addTask: addTaskReducer,
    deleteTask: deleteTaskReducer,
    updateTask: updateTaskReducer
})

export default reducer