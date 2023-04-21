// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgokD3Gai2dWlUtgJVA3_IKSL8PTeUCyU",
    authDomain: "flashcards-80065.firebaseapp.com",
    projectId: "flashcards-80065",
    storageBucket: "flashcards-80065.appspot.com",
    messagingSenderId: "17748136109",
    appId: "1:17748136109:web:816dffd98cfed059b6f624"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;