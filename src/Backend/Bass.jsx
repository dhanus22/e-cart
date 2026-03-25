// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRz8e3GvHEmYKtad9rHV6v21O29ld3YEI",
  authDomain: "e-cart-358d6.firebaseapp.com",
  projectId: "e-cart-358d6",
  storageBucket: "e-cart-358d6.firebasestorage.app",
  messagingSenderId: "754709530590",
  appId: "1:754709530590:web:b200175c9f8c6639467f4f",
  measurementId: "G-JDNZ50CWQB"
};

// Initialize Firebase

//const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const _Auth=getAuth(app)
export const _DB=getFirestore(app)