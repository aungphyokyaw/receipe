import firebase from 'firebase'
import "firebase/auth"

let firebaseConfig = {
    apiKey: "AIzaSyCY6Tk_mhMQaO0q--2Xc-W2avUXfLxmb4M",
    authDomain: "recipe-ce0b4.firebaseapp.com",
    projectId: "recipe-ce0b4",
    storageBucket: "recipe-ce0b4.appspot.com",
    messagingSenderId: "1030744146410",
    appId: "1:1030744146410:web:99dc4418f77c69e839b293"
  };
  // Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebase.auth();
export {firebaseAuth}