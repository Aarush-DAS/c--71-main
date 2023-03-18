// Import the functions you need from the SDKs you need

import firebase from "firebase";
require("@firebase/firestore"); 
const firebaseConfig = {
  apiKey: "AIzaSyCyID4IxGmuOYxLb_55wN9Ja2l9sZq7TO4",
  authDomain: "c-75-937f0.firebaseapp.com",
  databaseURL: "https://c-75-937f0-default-rtdb.firebaseio.com",
  projectId: "c-75-937f0",
  storageBucket: "c-75-937f0.appspot.com",
  messagingSenderId: "686422180279",
  appId: "1:686422180279:web:4bafacdbfd78c9386da832"
};
firebase.initializeApp(firebaseConfig); 
export default firebase.firestore();