import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';


import { Provider } from 'react-redux'
import store from './store';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure({
  autoClose: 1500
})


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
