// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcqRIwLXO9d6UwUaw0oh0p3wXr88IKjao",
  authDomain: "chat-app-d071b.firebaseapp.com",
  projectId: "chat-app-d071b",
  storageBucket: "chat-app-d071b.appspot.com",
  messagingSenderId: "889285937555",
  appId: "1:889285937555:web:95a0b6869289fb4c2ac066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {auth};