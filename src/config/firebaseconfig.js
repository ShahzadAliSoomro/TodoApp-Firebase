// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBhjUVpn3S86v3DXLgHJZhg7GCa-mWnHc",
    authDomain: "login-todo-28ff5.firebaseapp.com",
    projectId: "login-todo-28ff5",
    storageBucket: "login-todo-28ff5.appspot.com",
    messagingSenderId: "662379287842",
    appId: "1:662379287842:web:fa984322eaee1ee236017b",
    measurementId: "G-NLB9KZJ6ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;