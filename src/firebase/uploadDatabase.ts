import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js';
import { catalog } from './database.js';

function uploadDatabase(): void {
  addDoc(collection(db, "database"), catalog);
}

export { uploadDatabase };