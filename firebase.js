// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPV3zmGRcmEruJ3OabbLCU0Md6B9A_bNU",
  authDomain: "winning-the-cancer-journey.firebaseapp.com",
  databaseURL: "https://winning-the-cancer-journey-default-rtdb.firebaseio.com",
  projectId: "winning-the-cancer-journey",
  storageBucket: "winning-the-cancer-journey.appspot.com",
  messagingSenderId: "856277153237",
  appId: "1:856277153237:web:c0e1807aa1748535a1b95c",
  measurementId: "G-6VMF55F370",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  getAnalytics(app);
}

// Initialize Firestore and export it
export const db = getFirestore(app);
