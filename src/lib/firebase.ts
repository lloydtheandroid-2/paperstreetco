import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "paper-street-soapbox-84i9i",
  "appId": "1:464035810053:web:1c35cc31f0c653a73e456c",
  "storageBucket": "paper-street-soapbox-84i9i.appspot.com",
  "apiKey": "AIzaSyAE8ntCP5G7_Y0WH7ik0Db05U8CT3JJ2rs",
  "authDomain": "paper-street-soapbox-84i9i.firebaseapp.com",
  "messagingSenderId": "464035810053"
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
