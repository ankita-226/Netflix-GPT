// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDT6vx73Q7KWPIWNHccRX8f7BOSfaCTGg",
  authDomain: "netflix-gpt-33caf.firebaseapp.com",
  projectId: "netflix-gpt-33caf",
  storageBucket: "netflix-gpt-33caf.appspot.com",
  messagingSenderId: "497044951109",
  appId: "1:497044951109:web:a4612e288b78c7391e132c",
  measurementId: "G-N2CBKYQESX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();