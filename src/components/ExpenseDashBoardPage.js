import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';


const ExpenseDashBoardPage = () => {
    return(
        <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
    );
}

export default ExpenseDashBoardPage;