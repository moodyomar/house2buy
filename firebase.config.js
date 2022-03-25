import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7QgEztLtlXm_5IzQRKXnDeb_6z63Mp6U",
  authDomain: "realestate-app-69307.firebaseapp.com",
  projectId: "realestate-app-69307",
  storageBucket: "realestate-app-69307.appspot.com",
  messagingSenderId: "719209581339",
  appId: "1:719209581339:web:da34b7aad494c0e196e1be",
  measurementId: "G-VJCTY756M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()