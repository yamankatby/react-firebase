import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAggh3sazRUe_a1QIZDdQRQeqGCCI3gzp4",
  authDomain: "posts-app-55de2.firebaseapp.com",
  projectId: "posts-app-55de2",
  storageBucket: "posts-app-55de2.appspot.com",
  messagingSenderId: "945611829770",
  appId: "1:945611829770:web:5aca5cc248f759c544e5f3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
