import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});
// In the object inside the combineReducers, Key represent the individual slices of the
// state , set to the reducer