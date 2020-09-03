import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import {addExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

console.log('app.js is running');

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 700, createdAt: 1200 }));
store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: 1500 }));

store.dispatch(setTextFilter('bill'));
//store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('appDiv'));