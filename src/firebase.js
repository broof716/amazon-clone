import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7dyiZmj7lMOeeO97yutQgvKQfSrdUYKg",
  authDomain: "clone-596ae.firebaseapp.com",
  projectId: "clone-596ae",
  storageBucket: "clone-596ae.appspot.com",
  messagingSenderId: "150357231932",
  appId: "1:150357231932:web:00b906b90fc4e6e6303639",
  measurementId: "G-Q6276D1904"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };