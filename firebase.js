// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg1wBXhCh-OycdmP4edsK08-0bMC8cFKs",
  authDomain: "twitter-clone-ca4e9.firebaseapp.com",
  projectId: "twitter-clone-ca4e9",
  storageBucket: "twitter-clone-ca4e9.appspot.com",
  messagingSenderId: "546789653756",
  appId: "1:546789653756:web:35910c5f54af285fb76b79"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };