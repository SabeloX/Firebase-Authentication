import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAn9sGvbGFgZb5avg9SPLVjO60iDBuTzwQ",
    authDomain: "simple-auth-128ac.firebaseapp.com",
    projectId: "simple-auth-128ac",
    storageBucket: "simple-auth-128ac.appspot.com",
    messagingSenderId: "848249274727",
    appId: "1:848249274727:web:2ef9dfffa83fa27a6defc2",
    measurementId: "G-FKETGCWD1W"
};

firebase.initializeApp(firebaseConfig);

export default firebase;