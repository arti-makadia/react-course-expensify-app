import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import { startSetExpenses } from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase.js';
//import './playground/promises.js';

console.log('app.js is running perfectly');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('appDiv'));

store.dispatch(startSetExpenses()).then( () => {
    ReactDOM.render(jsx, document.getElementById('appDiv'));
});