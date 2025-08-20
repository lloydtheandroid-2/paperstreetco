import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';

// IMPORTANT: You must replace these placeholder values with the actual values from your Firebase project's console.
const firebaseConfig = {
  "projectId": "the-soapbox-d4c6q",
  "appId": "1:386326789588:web:4e7b2ce73e4453806d6a41",
  "storageBucket": "the-soapbox-d4c6q.firebasestorage.app",
  "apiKey": "AIzaSyC7A5NooTFhxkv-M-yXfHcdMaZtUMj-Am0",
  "authDomain": "the-soapbox-d4c6q.firebaseapp.com",
  "messagingSenderId": "386326789588"
};

function getFirebaseApp(): FirebaseApp {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}

export function getFirebaseAuth(): Auth {
    return getAuth(getFirebaseApp());
}

export const app = getFirebaseApp();
export const auth = getFirebaseAuth();
