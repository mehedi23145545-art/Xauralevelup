import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvOiRBlEQSj1qltf7larIUeyuq0gtYm9c",
  authDomain: "tournement-professonal.firebaseapp.com",
  databaseURL: "https://tournement-professonal-default-rtdb.firebaseio.com",
  projectId: "tournement-professonal",
  storageBucket: "tournement-professonal.firebasestorage.app",
  messagingSenderId: "676357797818",
  appId: "1:676357797818:web:6db83790eb5327a4dfcf83",
  measurementId: "G-RLLBZEPM20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
