// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtHdkcqG7QEH1P1VHqo3t8Jm1dqqlsiGE",
  authDomain: "savvy-shopper-5963a.firebaseapp.com",
  projectId: "savvy-shopper-5963a",
  storageBucket: "savvy-shopper-5963a.appspot.com",
  messagingSenderId: "100493414005",
  appId: "1:100493414005:web:93ca1a0229ff355578723c",
  measurementId: "G-07C296GC4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
