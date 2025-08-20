import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';

// IMPORTANT: You must replace these placeholder values with the actual values from your Firebase project's console.
const firebaseConfig = {
  "projectId": "the-soapbox-d4c6q",
  "appId": "REPLACE_WITH_YOUR_APP_ID",
  "storageBucket": "the-soapbox-d4c6q.appspot.com",
  "apiKey": "REPLACE_WITH_YOUR_API_KEY",
  "authDomain": "the-soapbox-d4c6q.firebaseapp.com",
  "messagingSenderId": "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID"
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
