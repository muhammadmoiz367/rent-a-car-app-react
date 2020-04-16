
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import firestore from  'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHgX6VJWx3UNvASURnqft1d4KwR6Cwe3M",
    authDomain: "rent-a-car-265522.firebaseapp.com",
    databaseURL: "https://rent-a-car-265522.firebaseio.com",
    projectId: "rent-a-car-265522",
    storageBucket: "rent-a-car-265522.appspot.com",
    messagingSenderId: "99218254841",
    appId: "1:99218254841:web:093e5559878f12c4842b28"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;