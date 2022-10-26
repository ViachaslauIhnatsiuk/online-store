import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  browserLocalPersistence,
  setPersistence
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEpO7tLrWnzkiU6EH09KW6yGLyXslbgj4",
  authDomain: "online-store-1a012.firebaseapp.com",
  projectId: "online-store-1a012",
  storageBucket: "online-store-1a012.appspot.com",
  messagingSenderId: "116450029188",
  appId: "1:116450029188:web:b1f6e166e9307ecba91cd1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

setPersistence(auth, browserLocalPersistence);

export {
  firebaseConfig,
  app,
  db,
  auth,
};