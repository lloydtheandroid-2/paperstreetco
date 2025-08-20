import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth, connectAuthEmulator } from 'firebase/auth';

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

const app: FirebaseApp = initializeFirebaseApp();
const auth: Auth = getAuth(app);

// Connect to Auth Emulator in development
if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
}

export { app, auth };
