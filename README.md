# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 1. install - for header

npm i react-bootstrap bootstrap

note # use ES7 code snippet extension in VS code

import css from reactbootstrap in index.js

component # header.js
bring in navBar code snippet

### 2. setup API server

https://www.npmjs.com/package/json-server

install with dependency
npm i -D json-server

bring in db.json code snippet

under scripts
"api": "json-server --port=3001 --watch db.json"

npm run api //to list the api endpoint

#test api endpoint in localhost
update db.json file with below tasks content

```
{
"tasks":[
{
"title":"shopping",
"isCompleted": false,
"id": 1
},
{
"title":"Dinner",
"isCompleted": false,
"id": 2
},
{
"title":"running",
"isCompleted": true,
"id": 3
}
]
}
```

### 3. Action & reducer for tasks

> npm i axios

Create config file
mkdir src/config

touch src/config/api.js

```
export default {
    API_BASE_URL: 'http://localhost:3001'
}
```

mention api endpoint url here

```

mkdir src/store/task

touch src/store/task/taskActionType.js

define constant for Get_task here
```

export const GET_TASK = 'GET_TASK'

```

touch src/store/task/taskAction.js


import axios
import apiConfig
import constant

write async function getTask() to dispatch
and axios to fetch in tasks from api endpoint

```

import axios from 'axios';
import apiConfig from '../../config/api'
import as taskActionType from './taskActionType';
export const getTask = () => async (dispatch) => {
try {
const result = await axios.get(`${apiConfig.API_BASE_URL}/tasks`)

        dispatch({
            type: taskActionType.GET_TASK,
            payload: result.data,
        })

    } catch (error) {
        console.log(error);
    }

}

```



> touch src/store/task/taskReducer.js

initiate the state

write taskReducer function
```

import as taskActionType from "./taskActionType"

const initialTaskState = {
taskList: []
}

const taskReducer = (state = initialTaskState,
{ type, payload }) => {
switch (type) {
case taskActionType.GET_TASK:
return {
...state,
taskList: payload
}
default:
return state
}
}

export default taskReducer

```
### 3. Create store
Redux devtools

Install Redux devtool for chrome

> npm install redux react-redux redux-thunk redux-devtools-extension

https://www.npmjs.com/package/redux-devtools-extension



touch src/store/rootReducer.js # for combined reducer
```

import { combineReducers } from 'redux'
import taskReducer from './task/taskReducer'

const reducer = combineReducers({
task: taskReducer
})

export default reducer

```
touch src/store/index.js

```

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composewithDevTools } from 'redux-devtools-extension'
import reducer from './rootReducer'

const store = createStore(
reducer,
undefined,
composewithDevTools(applyMiddleware(thunk))
)

export default store

```
switch to index.js # that host app
```

import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
<Provider store={store} >
<App />
</Provider>

,
document.getElementById('root')
);

```

> now main index.js  to configure the store
import provider from react-redux
import store


```

import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
<Provider store={store} >
<App />
</Provider>,
document.getElementById('root')
);

```


### 4. Dispatch Get Task action
touch src\components\ListTask.js

call dispatch (getTask action)

```

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTask } from '../store/task/taskAction'

export default function ListTask() {
const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTask())
    }, [])
    return (
        <div>

        </div>
    )

}

```
#Now to bring into effect, include ListTask into App.js

```

import Header from "./components/Header";
import ListTask from "./components/ListTask";

function App() {
return (
<>

<Header />
<ListTask />
</>
)
}

export default App;

### 5. display task list in the UI

ListGroup- with badges # bootstrap

ListTask.js

> include code snippet from bootstrap

bring in Grid => container # react-bootstrap]
Row className= justify-content-center mt-5 and Col => to format

> useSelector to listout the tasks in the above grid
> useDispatch, useSelector from react-redux

> use Map function with li to loop through the takss

#seprate useSelector logic into different file #

> index.html => mention fontawesome cdn
> Look for trash icon
> append li in UI section

wrap trash icon into Button

### 6. Get Task Loader State

define action type for begins success failure

then

> taskAction

    . dispatch Begin action
    . dispath success action
    . dispatch failure action in catch block

> taskReducer

    . set loading : false
    . accept all 3 tasks and change loading accordingly

> another useSelector for get task loading

    . getTaskLoadingSelector

> list Task screen

    . set condition for loading task

> bring spinner from react-bootstrap for loading symbol

### 7. Redux logger to log on console

https://www.npmjs.com/package/redux-logger

> npm i redux-logger

Index.js

> import CreateLogger from redux-logger
> createLogger(

     collapsed: true

)

> createStore(...next to thunk, createLogger)

### 8. Toast UI to show sucess / error message

https://www.npmjs.com/package/react-toastify

npm i react-toastify

main index.js
. import toast #refer weblink
. toast.configure()

taskAction.js
. import toast
. catch { toast,error(error.msg)}

listTask.js
. add condition for Empty Task List

### 9. ADD TASK , ACTION & Reducer

> taskActionType.js

    . Add constant for add task

> taskAction.js

    . create AddTask() action
    . pass taskData as param
    . axios.post(apiUrl, taskData)

> taskReducer.js

    . initializeState > loading:false
    . taskList: [...state.taskList, payload]

### 10. Add Task UI

> create AddTaskScreen.js component

    .Add button in Container
    .Add + icon from fontawesome
    .Add Modal(vertical centered)
    . useState to set props for modal
    . add props to Modal, show, onHide
    . onclick => setShowModal to true, rest set it to false
    . fill modal with form component
    . then from layout, horizontal form
    . disable form validation , auto - completion
    . add 2 button to submit n cancel the task in Modal

> import AddTaskScreen into App.js

    .import AddTaskScreen

### 11. Dispatch Add Task

> AddTaskScreen.js

## part 1 define useState

    . useState => to fetch taskname , taskstatus from Form
    . on Task Name , form control , add OnChange Handler = {handleTaskNameChange}
    . add value = {taskName}
    . add handler function (event) for above => setTaskName(e.target.value)
    . Repeast Same for Task Status Radio Button change handler , add handler ad FormGroup level
    . Add value prop to each radio button
    . on Submit button , add handleSubmit() then define the function (taskname, task status)

## part2 dispatch function

    x import useDispatch, useSelector from react-redux
    x bring in action from taskAction
    x initiate dispatch
    x dispatch(addTask action on handleSubmit) => pass (title, isCompleted)
    x add everything in try/catch block
    x add toastUI in AddTask action block
    x setShowModal(false) to close the modal

## part3 add loader

    x add Spinner to Submit button
    x addtaskSelectorLoading to check the status
    x add a function to clear the state (Form) , setTaskName and setTaskStatus to initializeState
    x call this fucntion from OnHide n onSubmit

> taskAction.js

    x add toast message for sucess & below dispatch()
    x in catch block , throw error , this is to stop closing the modal

### 12. Intuitive UI (coloring the tasks)

> ListTask.js

    x add condition(as class) to change th task color
    x index.css , add styling for coloring

### 13. Delete Task

> taskActionType.js

    x add delete task action type

> taskAction.js

    x add deleteTask(id)
    x remove const result
    x axios.delete(apiurl/${id})
    x set payload : id
    x set toaster message to sucessfully delete task

> taskReducer.js

     x create delete task reducer
     x taskList: filter through the tasks and task.id !== payload

> ListTask.js

     x add onClick handler on delete
     x pass task as param
     x useSelector => to pick the state
     x dispatch deleteTask action
     x pass task.id as param
     x add spinner next to delete button
     x useState to track the id to be deleted, initial value is null
     x removeTaskHandler( setTaskId = task.id)
     x spinner section , add condition (task.id === deletedTaskId)
