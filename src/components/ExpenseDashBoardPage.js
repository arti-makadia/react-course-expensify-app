import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashBoardPage = () => {
    return(
        <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
    );
}

export default ExpenseDashBoardPage;