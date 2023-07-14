// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
}
export { app, analytics, auth, db };

export default app;

