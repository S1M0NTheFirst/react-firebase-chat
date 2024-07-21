import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyBGfgoHMB918vdxuhEBf7l19LatS7kOufM",
  authDomain: "chat-app-87b63.firebaseapp.com",
  projectId: "chat-app-87b63",
  storageBucket: "chat-app-87b63.appspot.com",
  messagingSenderId: "713002535913",
  appId: "1:713002535913:web:a1cf2ab025c397d8fd5978"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();