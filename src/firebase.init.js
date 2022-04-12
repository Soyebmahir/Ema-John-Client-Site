// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX7L0xb0JlWLmZ_az5V59zmGoLPDOrAvc",
  authDomain: "ema-john-with-authentica-41638.firebaseapp.com",
  projectId: "ema-john-with-authentica-41638",
  storageBucket: "ema-john-with-authentica-41638.appspot.com",
  messagingSenderId: "18339638549",
  appId: "1:18339638549:web:816bf552f07c5a088a4d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;