// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcu-Vvv1iRRD5vH4sw7LgBlS09FLFc20M",
  authDomain: "codefiesta-a8d05.firebaseapp.com",
  projectId: "codefiesta-a8d05",
  storageBucket: "codefiesta-a8d05.appspot.com",
  messagingSenderId: "43287681686",
  appId: "1:43287681686:web:d35402f45f53f28f5a80b7",
  measurementId: "G-7CSF91XV12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;