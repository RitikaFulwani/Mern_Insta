import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBZdjQ5VeSktqcL06o1Vl4NwMHf0J-amhQ",
  authDomain: "instaclone-485d9.firebaseapp.com",
  projectId: "instaclone-485d9",
  storageBucket: "instaclone-485d9.appspot.com",
  messagingSenderId: "561526348327",
  appId: "1:561526348327:web:c97b3ea15d4fad10d58c02",
  measurementId: "G-957Q2WWG4F"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
