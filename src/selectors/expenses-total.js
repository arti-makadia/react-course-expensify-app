export default (expenses) => {
    return expenses
    .map((expense) => expense.amount )    //map the single expense amount
    .reduce( (sum, value) => sum + value, 0);  //sum of all expenses this reduce function run length of array time.....at starting point value variable is set 0.
    
};