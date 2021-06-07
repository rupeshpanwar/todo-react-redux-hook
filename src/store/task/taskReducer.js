import * as taskActionType from "./taskActionType"

const initialTaskState = {
    taskList: [],
    loading: false,
    addTaskLoading: false
}

const taskReducer = (
    state = initialTaskState,
    { type, payload }) => {
    switch (type) {
        case taskActionType.GET_TASK_BEGINS:
            return {
                ...state,
                loading: true
            }
        case taskActionType.GET_TASK_SUCCESS:
            return {
                ...state,
                taskList: payload,
                loading: false
            }
        case taskActionType.GET_TASK_FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

const addTaskReducer = (state = initialTaskState, { type, payload }) => {
    switch (type) {
        case taskActionType.ADD_TASK_BEGINS:
            return {
                ...state,
                addTaskLoading: true
            }
        case taskActionType.ADD_TASK_SUCCESS:
            return {
                ...state,
                taskList: [...state.taskList, payload],
                addTaskLoading: false
            }
        case taskActionType.ADD_TASK_FAILURE:
            return {
                ...state,
                addTaskLoading: false
            }
        default:
            return state

    }

}

export {
    taskReducer,
    addTaskReducer
}
