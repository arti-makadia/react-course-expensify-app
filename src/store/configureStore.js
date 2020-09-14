import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';
import authReducer from '../reducers/auth.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Store creation
export default () => {    
      
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      auth: authReducer,
      filters: filtersReducer      
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //for browser to see redux deveveloper tool windows output
  );

  return store;
    };


