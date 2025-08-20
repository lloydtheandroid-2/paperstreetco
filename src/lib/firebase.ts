// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "paper-street-soapbox",
  "appId": "1:762380655759:web:a9c1855b0308b713b824fa",
  "storageBucket": "paper-street-soapbox.firebasestorage.app",
  "apiKey": "AIzaSyD1FGmC2Xquifxfzrm-a-lg7MsOZrhOtDk",
  "authDomain": "paper-street-soapbox.firebaseapp.com",
  "messagingSenderId": "762380655759"
};


// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;

if (!getApps().length) {
  if (!firebaseConfig.apiKey) {
    throw new Error('Missing Firebase API Key');
  }
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

auth = getAuth(app);

export { app, auth };
