// auth.ts

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import bcrypt from "bcryptjs";

export const SALT_ROUNDS = 10; // Jumlah salt rounds untuk bcrypt

export const register = async (
  fullName: string,
  email: string,
  password: string
) => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      hashedPassword
    );
    const user = userCredential.user;

    // Menyimpan data pengguna ke Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email: user.email,
      role: "user",
      password: hashedPassword,
    });

    console.log("User registered and role assigned");
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error("Email already in use. Please use a different email.");
    } else {
      console.error("Error registering user:", error);
      throw error("Failed to register. Please check your email or password.");
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const hashedPassword = userData.password;
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (passwordMatch) {
        console.log("User logged in");
        return userData.role;
      } else {
        console.log("Incorrect password");
        throw new Error("Incorrect password");
      }
    } else {
      console.log("No such document!");
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const updateRole = async (userId: string, newRole: string) => {
  try {
    await setDoc(doc(db, "users", userId), { role: newRole }, { merge: true });
    console.log("User role updated");
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error;
  }
};
