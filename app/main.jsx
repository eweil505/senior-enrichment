// import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.js';

ReactDOM.render( 
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('main')
)