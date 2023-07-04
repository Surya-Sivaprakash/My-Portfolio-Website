import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu-vDLZ_6y40rYxKveQnWe6u5X2uOiE2o",
  authDomain: "myportfolio-46251.firebaseapp.com",
  projectId: "myportfolio-46251",
  storageBucket: "myportfolio-46251.appspot.com",
  messagingSenderId: "980175221439",
  appId: "1:980175221439:web:7754d848416666e5058c0a",
  measurementId: "G-0KLWKL1Z6F",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
