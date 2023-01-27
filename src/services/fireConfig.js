// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0NCagYq45g7q0tW6foK4mPlGJLo9UhBs",
  authDomain: "task-e559c.firebaseapp.com",
  projectId: "task-e559c",
  storageBucket: "task-e559c.appspot.com",
  messagingSenderId: "992354105261",
  appId: "1:992354105261:web:64c7ed1a1a4f0a0e8e5324",
  measurementId: "G-WTW40DKK5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const store = getFirestore(app)

export default { auth, store }