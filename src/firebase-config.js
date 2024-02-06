import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2S8WvJ1TDZMJL_bEXCclYrNAH-dSY9Q0",
  authDomain: "image-gallery-8f91f.firebaseapp.com",
  projectId: "image-gallery-8f91f",
  storageBucket: "image-gallery-8f91f.appspot.com",
  messagingSenderId: "78657446971",
  appId: "1:78657446971:web:cfed9eab86768e98a7681e",
  measurementId: "G-N0STMYHN19",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
