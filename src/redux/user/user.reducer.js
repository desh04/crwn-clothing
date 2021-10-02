//const [state, dispatch] = useReducer(reducer, initialState, init)

import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload         // with payload we are setting current user value
            };
        default:
            return state;
    }
};

export default userReducer;