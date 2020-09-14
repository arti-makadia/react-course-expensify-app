import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import { startSetExpenses } from './actions/expenses.js';
import { login, logout } from './actions/auth.js';
import getVisibleExpenses from './selectors/expenses.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase.js';

console.log('app.js is running perfectly');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('appDiv'));

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('appDiv'));
        hasRendered = true;
    }
};


//THis function will call when user status change ( when user loged out/ when user log in )

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        //console.log('log in');
        //console.log(user);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then( () => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
        
    } else {
        //console.log('log out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});