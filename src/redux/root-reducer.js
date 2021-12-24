import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// if want to use session Storage use below code 
//import storageSession from 'redux-persist/lib/storage/session'
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
// key is root. setting at what point inside of reducer object we want to start storing .
// storage key will go to storage from the redux-persistor,
// whitelist property is an array containing the string name of reducer that we want to store.
// not persisting the user cause it is handled by the firebase .

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer); // modified version of rootReducer with persistent capability

/* // used before the Redux persist
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
// In the object inside the combineReducers, Key represent the individual slices of the
// state , set to the reducer */