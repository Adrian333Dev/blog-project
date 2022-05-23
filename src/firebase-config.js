import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPLjyICF1fhONIU3CcPUgYmbG4qTuMJQI",
  authDomain: "blog-website-b9cad.firebaseapp.com",
  projectId: "blog-website-b9cad",
  storageBucket: "blog-website-b9cad.appspot.com",
  messagingSenderId: "289127971768",
  appId: "1:289127971768:web:26ab98a3aa7a3239362d4d",
  measurementId: "G-XR0E24P75R",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
