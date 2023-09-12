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

  type User = firebase.User;


export const createUserProfileDocument = async (userAuth: User | null, additionalData?: any) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //document reference object

  const snapShot = await userRef.get(); //document snapshot object

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) //create document
    } catch (error) {
      console.log('error creating user', (error as Error).message);
    }

  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);