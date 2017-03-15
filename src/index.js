import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import promise from 'redux-promise';

import reducers from './reducers';

export const store = applyMiddleware(
  promise
)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>, document.querySelector('#app'));
