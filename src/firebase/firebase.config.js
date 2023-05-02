// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxX2OPxGx-q1qOrt24w5xWAOomPyIjiqE",
    authDomain: "chef-recipe-hunter-f1950.firebaseapp.com",
    projectId: "chef-recipe-hunter-f1950",
    storageBucket: "chef-recipe-hunter-f1950.appspot.com",
    messagingSenderId: "82199157709",
    appId: "1:82199157709:web:8badaad85a318bb3238284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;