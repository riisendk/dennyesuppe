import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

var ga = require('react-ga');
ga.initialize('UA-78798383-1');

function logPageView() {
    ga.pageview(window.location.pathname);
}

ReactDOM.render(
    <Router history={browserHistory} routes={routes} onUpdate={logPageView} />,
    document.getElementById('app')
);