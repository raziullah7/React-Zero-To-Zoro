// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Js7DbznGK2gT5tWwoENP1ZyeTp48aFw",
  authDomain: "social-media-project-dfa40.firebaseapp.com",
  projectId: "social-media-project-dfa40",
  storageBucket: "social-media-project-dfa40.appspot.com",
  messagingSenderId: "1039689928931",
  appId: "1:1039689928931:web:f93f405b26a79c9566f5d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);