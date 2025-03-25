// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmNSN_Oud_08JPPMhqIYCSNzqgESX1O3Y",
  authDomain: "firstai-155f8.firebaseapp.com",
  projectId: "firstai-155f8",
  storageBucket: "firstai-155f8.firebasestorage.app",
  messagingSenderId: "640272982372",
  appId: "1:640272982372:web:0a103d50f1f60784afda71",
  measurementId: "G-Q1VN4RJ4RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };