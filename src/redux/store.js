import { createStore, applyMiddleware } from 'redux';

// middleware between the action and store
// will show the action, use full in debugging the code
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//setting up middleware
// middleware what store is expecting will be an array 
const middlewares = [logger];
// creating middleware and then passing it inside the applyMiddleware
// using this way , cause by doing this we can pass more things in the middlewares
// in the future. and this will make our code more scaleable. 

// setting up store
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
