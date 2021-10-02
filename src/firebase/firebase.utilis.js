import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC710lOjyaH5vgYtbphfGs1qBNh6GN_s2k",
    authDomain: "crown-db-7abec.firebaseapp.com",
    projectId: "crown-db-7abec",
    storageBucket: "crown-db-7abec.appspot.com",
    messagingSenderId: "548366082339",
    appId: "1:548366082339:web:d3e154223df225100d6c96",
    measurementId: "G-WR8VR45K3Q"
  };

  export const creatUserProfileDocument = async (userAuth, additionalData) => {
    // only want to store data on user signIn. 
    // when signing Out we get Null so we would need to filter that out.
    // if null encountered then we will just return. 
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // when we console.log(snapshot) we will get an object . that will be containing 
    // an property named 'exists' . if it is true that data at this location exists.
    // if false no data is there.
    // property 'metadata' gives us the info about the when its created , it is ceached or not.
    // any pending rights?, 'ref' object.


    console.log(snapShot);

    // if data not exist we are going to creat the data. for creating the data we will be using 
    // DocumentReference Object. 
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
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



  /* to access the data from firestore ;
      accessing the collection named 'users' from firebase 
        firestore.collection('users')
      to accessing the Document inside the collection will use .doc(ID) 
        firestore.collection('users').doc('ko08fRjZw8LKJT8Q9wFh')
        
        now can chain this code to get the collections and the doc.

        firestore.collection('users').doc('ko08fRjZw8LKJT8Q9wFh').collection('cartIteams).doc('ID')
        above code line says: get the collection named users .form that collection want the doc
         with the ID(=ko08fRjZw8LKJT8Q9wFh) . from there we want property collection named 'cartIteam' and 
         doc with ID ..... and so on

         we could also do this using 
          firestore.doc('/users/ko08fRjZw8LKJT8Q9wFh/cartIteams/ID');
          firestore.collection('/users/ko08fRjZw8LKJT8Q9wFh/cartIteams');
      */