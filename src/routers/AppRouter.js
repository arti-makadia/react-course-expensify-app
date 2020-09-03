import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import EditExpencePage from '../components/EditExpensePage';
import AddExpencePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />  
        <Switch>
            <Route path='/' component={ExpenseDashBoardPage} exact={true}  />
            <Route path='/add' component={AddExpencePage} />
            <Route path='/edit/:id' component={EditExpencePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>    
    </BrowserRouter>
);

export default AppRouter;