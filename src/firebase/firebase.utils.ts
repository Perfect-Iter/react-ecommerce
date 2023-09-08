import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTCxtioeuxitfejkEEbh6C_bxBvpWF6V4",
    authDomain: "eshopp-b78b8.firebaseapp.com",
    projectId: "eshopp-b78b8",
    storageBucket: "eshopp-b78b8.appspot.com",
    messagingSenderId: "377309343947",
    appId: "1:377309343947:web:687a2f6e92753c756f6b4e",
    measurementId: "G-W1MC16JYBP"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);