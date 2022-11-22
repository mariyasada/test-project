// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4e6vzud9oYYTQFXtYKaG5p2YkkYD0Gfs",
  authDomain: "ecommerce-3c04f.firebaseapp.com",
  projectId: "ecommerce-3c04f",
  storageBucket: "ecommerce-3c04f.appspot.com",
  messagingSenderId: "237829773931",
  appId: "1:237829773931:web:b04435b1a456498112af2e",
  measurementId: "G-ZVQN5GD17D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
