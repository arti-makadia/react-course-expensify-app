import React from 'react';
import { shallow } from 'enzyme';
import { expensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<expensesSummary expenseCount={1} expensesTotal={3478} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<expensesSummary expenseCount={23} expensesTotal={6345645744879} />);
    expect(wrapper).toMatchSnapshot();
});