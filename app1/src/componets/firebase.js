// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaIx1J4srYLU5up13Y1yVMBVtdVcXK1wQ",
  authDomain: "otp-projects-a2ca8.firebaseapp.com",
  projectId: "otp-projects-a2ca8",
  storageBucket: "otp-projects-a2ca8.appspot.com",
  messagingSenderId: "272325174348",
  appId: "1:272325174348:web:0037ebd4effd325fb380e9",
  measurementId: "G-HQNSGHKZEE"
};


firebase.initializeApp(firebaseConfig)

export default firebase;