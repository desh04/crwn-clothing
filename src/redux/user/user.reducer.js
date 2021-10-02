//const [state, dispatch] = useReducer(reducer, initialState, init)

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.payload         // with payload we are setting current user value
            };
        default:
            return state;
    }
};

export default userReducer;