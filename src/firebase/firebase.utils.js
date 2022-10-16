import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAAk5JK8lBJpe6AL1BrBq_6KFE-hq62L74",
    authDomain: "crwn-clothing-db-47b3b.firebaseapp.com",
    projectId: "crwn-clothing-db-47b3b",
    storageBucket: "crwn-clothing-db-47b3b.appspot.com",
    messagingSenderId: "350702336771",
    appId: "1:350702336771:web:c5c7b82217518d37a4c736",
    measurementId: "G-5JYW3TD4TW"
  };
  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdDate=new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdDate,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;