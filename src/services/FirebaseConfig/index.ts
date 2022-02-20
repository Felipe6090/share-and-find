// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8HAxPXDDoa1WzWFdSj1T7umMJXBca278",
  authDomain: "share-and-find-1f590.firebaseapp.com",
  projectId: "share-and-find-1f590",
  storageBucket: "share-and-find-1f590.appspot.com",
  messagingSenderId: "673442935925",
  appId: "1:673442935925:web:376fa3f62f2085393bb43c",
  measurementId: "G-W7RXHLVMNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
