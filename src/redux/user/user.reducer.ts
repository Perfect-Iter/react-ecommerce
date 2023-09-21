import firebase from 'firebase/compat/app';

type currentUserType = null | firebase.User

const INITIAL_STATE = {
    currentUser: null
} as {currentUser: currentUserType}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const userReducer = (state = INITIAL_STATE, action: any) =>{
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}