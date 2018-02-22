// import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { Router } from 'react-router-dom';
import App from './components/App.js';
import history from "./history"

ReactDOM.render( 
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('main')
)