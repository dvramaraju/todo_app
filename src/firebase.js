import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHZANJXzo2SanMPH7pVXa0JyQ3_YEF6-M",
    authDomain: "todo-app-cp-39b80.firebaseapp.com",
    databaseURL: "https://todo-app-cp-39b80.firebaseio.com",
    projectId: "todo-app-cp-39b80",
    storageBucket: "todo-app-cp-39b80.appspot.com",
    messagingSenderId: "810784846158",
    appId: "1:810784846158:web:286148f20f4e9f223cae1f",
    measurementId: "G-2KQV78WH1R"
});

const db = firebaseApp.firestore();

export default db;