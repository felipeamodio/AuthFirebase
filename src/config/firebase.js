import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6yKDvb4R57-w7H1tcH9njDQbvg_7MYE8",
  authDomain: "rn-sports-ca4b2.firebaseapp.com",
  projectId: "rn-sports-ca4b2",
  storageBucket: "rn-sports-ca4b2.appspot.com",
  messagingSenderId: "1074733393051",
  appId: "1:1074733393051:web:8634433e11c73fd1fa523e",
  measurementId: "G-9DLK2V21V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export {auth};