import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers/index';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'


const client = axios.create({
    baseURL: 'https://reqres.in/api',
    responseType: 'json'
})

const store = createStore(
    rootReducer,
    applyMiddleware(
        axiosMiddleware(client)
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
