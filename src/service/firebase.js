import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQXFF7e1lf3WSexsDVBqtXP3V2OqMl-ws",
    authDomain: "invoice-app-be920.firebaseapp.com",
    projectId: "invoice-app-be920",
    storageBucket: "invoice-app-be920.appspot.com",
    messagingSenderId: "305361619829",
    appId: "1:305361619829:web:9428c71facea8ea15f613c",
    measurementId: "G-G6R2MJ8M6K"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();