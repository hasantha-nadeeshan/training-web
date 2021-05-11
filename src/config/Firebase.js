import firebase from "firebase";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC6IMK3LZxEqwA2jea-QYTMYeDnqsZELVQ",
  authDomain: "dear-diary-hasantha-784ec.firebaseapp.com",
  databaseURL: "https://dear-diary-hasantha-784ec-default-rtdb.firebaseio.com",
  projectId: "dear-diary-hasantha-784ec",
  storageBucket: "dear-diary-hasantha-784ec.appspot.com",
  messagingSenderId: "918579234017",
  appId: "1:918579234017:web:d2e8b0707b08bd6f54e3a0",
  measurementId: "G-1K9R9MVLGK"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();

