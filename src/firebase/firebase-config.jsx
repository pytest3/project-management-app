import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDvQbV38TaooOuLIgEqGlfVrx62oJb03U",
  authDomain: "project-management-fe061.firebaseapp.com",
  projectId: "project-management-fe061",
  storageBucket: "project-management-fe061.appspot.com",
  messagingSenderId: "848586280601",
  appId: "1:848586280601:web:62ff63bd46db6be71bb208",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default auth;
