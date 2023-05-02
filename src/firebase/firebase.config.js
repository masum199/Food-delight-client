// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA767jzzWZqkEzn8Ksp8eI4hquRpBi0uzs",
  authDomain: "assignment-10-client-d1364.firebaseapp.com",
  projectId: "assignment-10-client-d1364",
  storageBucket: "assignment-10-client-d1364.appspot.com",
  messagingSenderId: "212101643575",
  appId: "1:212101643575:web:64a47823961aa555e6aeb2",
  measurementId: "G-M2FP883VC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app