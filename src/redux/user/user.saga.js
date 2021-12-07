import { takeLatest, call, put, all } from 'redux-saga/effects';
import UserTypes from './user.types';
import { 
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure,
    signOutSuccess,
    signOutFailure
} from './user.action';
import { 
    createUserProfileDocument, 
    auth,
    provider,
    getCurrentUser
} from '../../firebase/firebase.utils';

import { 
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { getDoc } from 'firebase/firestore';

// Utils
export function* dispatchSignInState(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot =  yield getDoc(userRef);
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch(error) {
        yield put(signInFailure(error));
    }
}

// Async generators
export function* signInWithGoogleAsync() {
    try {
        const { user } = yield signInWithPopup(auth, provider);
        yield dispatchSignInState(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmailAsync({ payload: { email, password }}) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password);
        yield dispatchSignInState(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signUpStartAsync({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        put(
            signUpSuccess({ user, additionalData: { displayName } })
        );
    } catch(error) {
        yield put(
            signUpFailure(error)
        );
        console.log(error);
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData }}) {
    const { displayName } = additionalData;
    yield dispatchSignInState(user, displayName);
}

export function* isUserAuthenticated() {
    try {
        const user = yield getCurrentUser();
        if(!user) return;
        yield dispatchSignInState(user)
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signOutAsync() {
    try {
        yield signOut(auth);
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure());
    }
}

// sagas
export function* onGoogleSignInStart() {
    yield takeLatest(
        UserTypes.GOOGLE_SIGNIN_START,
        signInWithGoogleAsync
    )
}

export function* onEmailSignInStart() {
    yield takeLatest(
        UserTypes.EMAIL_SIGNIN_START,
        signInWithEmailAsync
    )
}

export function* onSignUpStart() {
    yield takeLatest(
        UserTypes.SIGNUP_START,
        signUpStartAsync
    )
}

export function* onSignUpSuccess() {
    yield takeLatest(
        UserTypes.SIGNUP_SUCCESS,
        signInAfterSignUp
    )
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* onSignOutStart() {
    yield takeLatest(
        UserTypes.SIGN_OUT_START,
        signOutAsync
    )
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onCheckUserSession),
        call(onSignOutStart)
    ]);
}