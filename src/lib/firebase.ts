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

function initializeFirebaseApp(): FirebaseApp {
  if (getApps().length) {
    return getApp();
  }
  return initializeApp(firebaseConfig);
}

export const app: FirebaseApp = initializeFirebaseApp();
export const auth: Auth = getAuth(app);

// This function is now deprecated but kept for compatibility in case it's used elsewhere.
export function getFirebaseAuth(): Auth {
    return auth;
}
