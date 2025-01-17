import { v4 as uuid } from 'uuid';
import database from '../firebase/firebase.js';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

  export const startAddExpense = (expenseData = {}) => {

    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const { description='', note='', amount=0, createdAt=0} = expenseData;
      const expense = { description, note, amount, createdAt };

      return  database.ref(`users/${uid}/expenses`).push(expense)    //add data into database
      .then( (ref) => {
          dispatch(addExpense({ id : ref.key, ...expense })); //add data into redux store
      });
    };
  };
  
  // REMOVE_EXPENSE
  export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  export const startRemoveExpense = ({ id } = {}) => {

    return (dispatch, getState) => {
      const uid = getState().auth.uid;
           return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            //console.log('Data is Removed');
            dispatch(removeExpense({ id }));
              })
            
    };
  };
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {       //here we will update all field of data so pass UPDATES object
          dispatch(editExpense(id, updates));
        });
    };
  };
  //SET_EXPENSES

  export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

  export const startSetExpenses = () => {

  return (dispatch, getState) => { 
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then( (snapshot) => {
          const expenses = [];
          snapshot.forEach((childSnapshot) => {
            expenses.push({
                  id : childSnapshot.key,
                    ...childSnapshot.val()
             });
        });
    
       dispatch(setExpenses(expenses));
    //console.log(expenses);
  });
  };
  };