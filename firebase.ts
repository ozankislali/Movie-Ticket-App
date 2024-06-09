// firebase.ts
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCBXSKVI6w3lKaNL5GKXiT-P5N5KPzcNqE",
    authDomain: "movie-ticket-app-987b9.firebaseapp.com",
    projectId: "movie-ticket-app-987b9",
    storageBucket: "movie-ticket-app-987b9.appspot.com",
    messagingSenderId: "576022447981",
    appId: "1:576022447981:web:ef956f07d4b77a00b73c64",
    measurementId: "G-JX4506KWHZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export { firebase };
