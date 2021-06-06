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
import \* as taskActionType from './taskActionType';
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

import \* as taskActionType from "./taskActionType"

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
