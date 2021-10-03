import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer

});
// In the object inside the combineReducers, Key represent the individual slices of the
// state , set to the reducer