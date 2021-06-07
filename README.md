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

```
### 5. display task list in the UI

ListGroup- with badges # bootstrap

ListTask.js

> include code snippet from bootstrap

bring in Grid => container #  react-bootstrap]
Row className= justify-content-center mt-5 and Col => to format

> useSelector to listout the tasks in the above grid
useDispatch, useSelector from react-redux

> use Map function with  li to loop through the takss

#seprate useSelector logic into different file #

> index.html => mention fontawesome cdn
Look for trash icon
append li in UI section

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





















## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# todo-react-redux-hook
```
