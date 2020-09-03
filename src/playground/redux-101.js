import { createStore } from 'redux';

console.log('redux-101 is running');

//use array of destructuring
const incrementCount = (( { incrementBy = 1 } = {}) => {
    return { type : 'INCREMENT',
             incrementBy 
            } 
});

const decrementCount = (( { decrementBy = 1 } = {}) => {
    return { type : 'DECREMENT',
             decrementBy
            } 
});

const resetCount = ( () => {
    return { type : 'RESET' }
});

const setCount = ( ( { count }) => {
    return { type : 'SET',
             count
            }
});


//Create Store
const store = createStore( (state = { count : 10 }, action) => {
   
    switch(action.type){

        case 'INCREMENT' : return { count : state.count + action.incrementBy };
        case 'DECREMENT' : return { count : state.count - action.decrementBy };
        case 'RESET' : return { count : 0 };
        case 'SET' : return { count : 101 };
        default : return state;
        } 
    });

//sunction execute when ever the store value is change.
store.subscribe( () => {
    console.log(store.getState());
});

//Increment count value
store.dispatch(incrementCount( { incrementBy : 5 }));

store.dispatch(decrementCount( { decrementBy : 3 }));

//decrement count value
store.dispatch(decrementCount());

//Increment count value
store.dispatch(incrementCount());

//Reset count value
store.dispatch(resetCount());

store.dispatch(setCount( { count : 101 }));
