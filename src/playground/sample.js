import { createStore, combineReducers } from 'redux'; 
import {v4 as uuidv4} from 'uuid';

// ADD_EXPENSE

const addExpence = (({ description = '', note = '', amount = 0, createdDate = 0} = {}) => {
    return {
        type : 'ADD_EXPENSE',
        expense : { id : uuidv4(),
                    description,
                    note,
                    amount,
                    createdDate
                  }
    }
});

// REMOVE_EXPENCE
const removeExpence = (({id} = {}) => {
    return {
        type : 'REMOVE_EXPENSE',
        id
    }
});

// EDIT_EXPENCE
const editExpence = ((id, updates) => {
    return {
        type : 'EDIT_EXPENSE',
        id,
        updates
        }
});

// SET_TEXT_FILTER
// SORT_BY_TEXT
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expences Reducer

const expencesReducerDefaultState = [];

const expencesReducer = (state = expencesReducerDefaultState, action) => {

    switch(action.type){
        case 'ADD_EXPENSE' : return [...state, action.expense];
        case 'REMOVE_EXPENSE' : 
                    return state.filter(({id}) => { return id !== action.id; }); 
        case 'EDIT_EXPENSE' : 
                    return state.map( (expense) => {
                        if(expense.id === action.id){
                            return { ...state, ...action.updates};
                        } else {
                            return state;
                        }
                    });
                   
        default : return state;
    }
};

// Filter Reducer

const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {

    switch(action.type){
        
        default : return state;
    }
};

//create store
const store = createStore(
    combineReducers({
        expenses : expencesReducer,  // rootState Name(expenses) : reducerName(expencesReducer)
        filters : filterReducer
    })
    );

store.subscribe(() => {
    console.log(store.getState());
});

const expenceOne = store.dispatch(addExpence({ description : 'Rent', amount : 200 }));
const expenceTwo = store.dispatch(addExpence({ description : 'Coffee', amount : 100 }));

store.dispatch(removeExpence({ id : expenceOne.expense.id}));

store.dispatch(editExpence(expenceTwo.expense.id, {amount : 350}));

const demoState = {
    expenses : [{// this is an array of object
        id : 'jddbdvbnbvb',
        description : 'January Rent',
        note : 'This was the final payment for this address',
        amount : 51500,
        createdDate : 0
    }],
    filters : { // this is an object
        text : 'rent',
        sortBy : 'amount', // amount or Date
        startDate : undefined,
        endDate : undefined
    }
};

