import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvuSfwVmQsjY12tehj6WqS9WXUGQeENRU",
    authDomain: "subscriptions-be326.firebaseapp.com",
    projectId: "subscriptions-be326",
    storageBucket: "subscriptions-be326.appspot.com",
    messagingSenderId: "194654144260",
    appId: "1:194654144260:web:27af51eda85ea962033251"
  };

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
