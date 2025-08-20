// Import the functions you need from the SDKs you need
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


// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

export { app, auth };
