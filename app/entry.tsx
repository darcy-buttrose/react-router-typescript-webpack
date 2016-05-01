/// <reference path="./typings/typings.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './app';
import One from './one';
import Two from './two';

ReactDOM.render(
    <Router>
        <Route component={App} path="/">
            <Route path="one" component={One} />
            <Route path="two" component={Two} />
        </Route>
    </Router>
    ,document.getElementById('app')
);
