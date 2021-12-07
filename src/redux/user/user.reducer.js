import UserTypes from './user.types';

const DEFAULT_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case UserTypes.CURRENT_USER:
            return({
                ...state,
                currentUser: action.payload
            });
        case UserTypes.SIGNUP_SUCCESS:
        case UserTypes.SIGNIN_SUCCESS:
            return({
                ...state,
                currentUser: action.payload,
                error: null
            });
        case UserTypes.SIGNUP_FAILURE:    
        case UserTypes.SIGNIN_FAILURE:
            return({
                ...state,
                currentUser: null,
                error: action.payload
            });
        case UserTypes.SIGN_OUT_SUCCESS:
            return({
                ...state,
                currentUser: null,
                error: null
            });
        case UserTypes.SIGN_OUT_FAILURE:
            return({
                ...state,
                error: action.payload
            });    
        default:
            return state;
    }
}

export default userReducer;