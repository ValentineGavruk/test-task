import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import React from 'react';
import App from './src/containers/home.jsx';
import AddGoods from './src/containers/add-goods.jsx';
import { Provider } from 'react-redux'
import store from './src/store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
window.store = store;

export const routes = (

    <Provider store={store}>
        <MuiThemeProvider>
        <Router  history={browserHistory}>
            <Route path='/' component={App}/>
            <Route path='/add-goods' component={AddGoods} />
        </Router>
        </MuiThemeProvider>
    </Provider>
);