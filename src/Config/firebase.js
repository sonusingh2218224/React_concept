// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7FWFued5aCvcPxKSfwqYcSl-RMbj0ETw",
  authDomain: "testproject-dcc7d.firebaseapp.com",
  projectId: "testproject-dcc7d",
  storageBucket: "testproject-dcc7d.appspot.com",
  messagingSenderId: "879328549174",
  appId: "1:879328549174:web:29edaae479bab445847b97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase=getFirestore(app);
export default firebase

