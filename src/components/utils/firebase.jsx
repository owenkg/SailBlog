// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDis_LES0FQR_VdTXUvLbckeo6vB0tRkKw",
  authDomain: "sailblog-97637.firebaseapp.com",
  projectId: "sailblog-97637",
  storageBucket: "sailblog-97637.appspot.com",
  messagingSenderId: "999472146017",
  appId: "1:999472146017:web:7390719d65d579e1f42c20",
  measurementId: "G-D49ZJV1VFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}