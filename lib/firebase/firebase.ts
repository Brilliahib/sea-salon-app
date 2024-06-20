import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxvGytqqTYUe9g6UYSbOPjmuR-PQ5ZUfA",
  authDomain: "sea-salon-app.firebaseapp.com",
  projectId: "sea-salon-app",
  storageBucket: "sea-salon-app.appspot.com",
  messagingSenderId: "965054367801",
  appId: "1:965054367801:web:19a3e0f69ced9e8f8065e8",
  measurementId: "G-40D71HTMSC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
