import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmfm2OYnZOgBS0FBT9uxyUACUrLa8hbPU",
  authDomain: "musicfy-541fe.firebaseapp.com",
  projectId: "musicfy-541fe",
  storageBucket: "musicfy-541fe.appspot.com",
  messagingSenderId: "80307169963",
  appId: "1:80307169963:web:6013bd7e081f9ed8cb65ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);
