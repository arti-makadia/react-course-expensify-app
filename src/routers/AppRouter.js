import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import EditExpencePage from '../components/EditExpensePage';
import AddExpencePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';
import { Header } from '../components/Header';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        
        <Switch>
            <PublicRoute path='/' component={LoginPage} exact={true}  />
            <PrivateRoute path='/dashboard' component={ExpenseDashBoardPage} />
            <PrivateRoute path='/add' component={AddExpencePage} />
            <PrivateRoute path='/edit/:id' component={EditExpencePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>    
    </Router>
);

export default AppRouter;


