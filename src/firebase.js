import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyC6fKLAe_yWvWKhDbp_RyIBfoOdwAQJB7Q",
  authDomain: "my-portfolio-dd844.firebaseapp.com",
  projectId: "my-portfolio-dd844",
  storageBucket: "my-portfolio-dd844.appspot.com",
  messagingSenderId: "147803685488",
  appId: "1:147803685488:web:876a134d36f0322ef46ab5",
  measurementId: "G-X45WFDK7P2"
};



export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
