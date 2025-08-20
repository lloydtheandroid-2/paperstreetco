import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1FGmC2Xquifxfzrm-a-lg7MsOZrhOtDk",
  authDomain: "paper-street-soapbox.firebaseapp.com",
  projectId: "paper-street-soapbox",
  storageBucket: "paper-street-soapbox.firebasestorage.app",
  messagingSenderId: "762380655759",
  appId: "1:762380655759:web:a9c1855b0308b713b824fa",
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
