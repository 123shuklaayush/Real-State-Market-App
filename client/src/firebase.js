// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-application-2af13.firebaseapp.com",
  projectId: "real-estate-application-2af13",
  storageBucket: "real-estate-application-2af13.appspot.com",
  messagingSenderId: "700867459184",
  appId: "1:700867459184:web:0f205ed8816eb8ab83dcb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);