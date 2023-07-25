// firebase.js

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVqk-gpKj860x-97g3FZfuZVtrJlNNsB0",
  authDomain: "protips-landing-page.firebaseapp.com",
  projectId: "protips-landing-page",
  storageBucket: "protips-landing-page.appspot.com",
  messagingSenderId: "333700812023",
  appId: "1:333700812023:web:5416b3f19fd7f1cbce97f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }