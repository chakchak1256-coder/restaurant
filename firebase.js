import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


// — App config —
const firebaseConfig = {
  apiKey: "AIzaSyCjieTX_M2PDIgtC2u6vMfyzXYSWYXmiUk",
  authDomain: "protech-6c388.firebaseapp.com",
  projectId: "protech-6c388",
  storageBucket: "protech-6c388.firebasestorage.app",
  messagingSenderId: "987892798162",
  appId: "1:987892798162:web:2307b1e8773430df1d930b",
  measurementId: "G-ZY0H0WFRWT"
};


// — Initialize Firebase —
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app);


// — Google Provider —
const googleProvider = new GoogleAuthProvider();


// — Google Login —
const loginWithGoogle = async () => {
  try {

    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    const user = result.user;

    console.log("Logged in user:", user);

    return user;

  } catch (error) {

    console.error(
      "Google Login Error:",
      error
    );

  }
};


// — Logout —
const logoutUser = async () => {

  try {

    await signOut(auth);

    console.log("User logged out");

  } catch (error) {

    console.error(
      "Logout Error:",
      error
    );

  }

};


// — Exports —
export {
  app,
  analytics,
  db,
  auth,
  loginWithGoogle,
  logoutUser
};