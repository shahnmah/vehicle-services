
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCS4f5rxxd1sY3D4fi38Yape6G0o_Bbrz0",
  authDomain: "genius-car-services-92362.firebaseapp.com",
  projectId: "genius-car-services-92362",
  storageBucket: "genius-car-services-92362.appspot.com",
  messagingSenderId: "297359375635",
  appId: "1:297359375635:web:1645e8e3613934450e6ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;