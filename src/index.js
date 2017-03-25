import 'babel-polyfill';
import React from 'react';
// import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// import configureStore from './store/configureStore';

// const store = configureStore();

render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
);
