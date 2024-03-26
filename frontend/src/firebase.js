// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzvzmxUIWLO41wG2m9uxgNhLhX3BCVpqo",
  authDomain: "mern-auth-1a164.firebaseapp.com",
  projectId: "mern-auth-1a164",
  storageBucket: "mern-auth-1a164.appspot.com",
  messagingSenderId: "426283943078",
  appId: "1:426283943078:web:c66e0c5972dd7390a86067",
  measurementId: "G-TXTNPVGY77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);