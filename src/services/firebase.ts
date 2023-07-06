// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6QwCJt0XwVhVmXgxIlJ5anoEBW-_hg9Y",
  authDomain: "chatter-2b64d.firebaseapp.com",
  projectId: "chatter-2b64d",
  storageBucket: "chatter-2b64d.appspot.com",
  messagingSenderId: "798068174914",
  appId: "1:798068174914:web:f2c4c97cebcfd284fabddb",
  measurementId: "G-12YNRVP458"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
