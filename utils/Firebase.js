// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsg2KFXll3k4BmiDeqnfKm0CYRz5-oZsk",
  authDomain: "ravoluzen-pitcher.firebaseapp.com",
  projectId: "ravoluzen-pitcher",
  storageBucket: "ravoluzen-pitcher.appspot.com",
  messagingSenderId: "30434667818",
  appId: "1:30434667818:web:70416d46e5ebca427a8253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);