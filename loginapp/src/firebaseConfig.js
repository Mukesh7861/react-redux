// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYLkVZyhc_JleBBj_B3DlkNAZg87lDY6A",
  authDomain: "mukeshkumar-e2ae0.firebaseapp.com",
  projectId: "mukeshkumar-e2ae0",
  storageBucket: "mukeshkumar-e2ae0.firebasestorage.app",
  messagingSenderId: "972476284351",
  appId: "1:972476284351:web:4d79779676199c2f1a350a",
  measurementId: "G-XX9E8YGFCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
