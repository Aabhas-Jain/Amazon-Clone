import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUmDdWXvGU0P7LN94MaOIeOmDhAF0qbDs",
    authDomain: "clone-98477.firebaseapp.com",
    databaseURL: "https://clone-98477.firebaseio.com",
    projectId: "clone-98477",
    storageBucket: "clone-98477.appspot.com",
    messagingSenderId: "635518529954",
    appId: "1:635518529954:web:7a0ce4a7752b7399da42fb",
    measurementId: "G-WVGLXQMWCN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};