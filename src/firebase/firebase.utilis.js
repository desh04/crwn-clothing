import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC710lOjyaH5vgYtbphfGs1qBNh6GN_s2k",
    authDomain: "crown-db-7abec.firebaseapp.com",
    projectId: "crown-db-7abec",
    storageBucket: "crown-db-7abec.appspot.com",
    messagingSenderId: "548366082339",
    appId: "1:548366082339:web:d3e154223df225100d6c96",
    measurementId: "G-WR8VR45K3Q"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;