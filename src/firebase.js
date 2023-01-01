// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_sgYo4Alx2MX1LsrhiNUsrkFvtVXam8",
  authDomain: "todo-ceaf3.firebaseapp.com",
  projectId: "todo-ceaf3",
  storageBucket: "todo-ceaf3.appspot.com",
  messagingSenderId: "507505244311",
  appId: "1:507505244311:web:7e916c90644b5e0f2791d2",
  measurementId: "G-1EX3SMHL8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);