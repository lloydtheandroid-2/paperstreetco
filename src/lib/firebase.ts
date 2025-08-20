// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "paper-street-soapbox",
  "appId": "1:762380655759:web:a9c1855b0308b713b824fa",
  "storageBucket": "paper-street-soapbox.firebasestorage.app",
  "apiKey": "AIzaSyD1FGmC2Xquifxfzrm-a-lg7MsOZrhOtDk",
  "authDomain": "paper-street-soapbox.firebaseapp.com",
  "messagingSenderId": "762380655759"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
