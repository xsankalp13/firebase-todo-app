
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0Di-HKLXnP-_SDSN9N6c4TyBKrqLqhms",
  authDomain: "fir-todo-app-e8bf5.firebaseapp.com",
  projectId: "fir-todo-app-e8bf5",
  storageBucket: "fir-todo-app-e8bf5.appspot.com",
  messagingSenderId: "38247003417",
  appId: "1:38247003417:web:cace02a6f0c234b5e28188",
  measurementId: "G-XQQ3XZH93T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

