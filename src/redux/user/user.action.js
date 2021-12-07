import UserTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = emailAndPassword => ({
    type: UserTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export  const signInSuccess = user => ({
    type: UserTypes.SIGNIN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserTypes.SIGNIN_FAILIURE,
    payload: error
});

export const signUpStart = userInfo => ({
    type: UserTypes.SIGNUP_START,
    payload: userInfo
});

export const signUpSuccess = user => ({
    type: UserTypes.SIGNUP_SUCCESS,
    payload: user
});

export const signUpFailure = error => ({
    type: UserTypes.SIGNUP_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserTypes.SIGN_OUT_FAILURE,
    payload: error
});