// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.API_KEY,
  authDomain: "equi-vote.firebaseapp.com",
  projectId: "equi-vote",
  storageBucket: "equi-vote.appspot.com",
  messagingSenderId: "918086291845",
  appId: "1:918086291845:web:953ac0dd9aed177175f4ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
