import firebase from 'firebase/compat/app'; // 7.2
import 'firebase/compat/auth'; // 7.2
import 'firebase/compat/firestore'; // 7.2



const firebaseConfig = {
    apiKey: "AIzaSyD4JaGhRK0Fcuc7H-qkmtawWeIyW4YAIFU",
    authDomain: "clone-app-55d61.firebaseapp.com",
    projectId: "clone-app-55d61",
    storageBucket: "clone-app-55d61.appspot.com",
    messagingSenderId: "117894843595",
    appId: "1:117894843595:web:dbe2a0c3046bdce59a9f4e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); // 7.2

  const db = firebaseApp.firestore(); // 7.2

  const auth = firebase.auth() // 7.2

  export { db, auth }; // 7.2