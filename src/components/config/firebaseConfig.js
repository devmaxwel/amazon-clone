import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCVRAULN3cSMrVubMo3iukadBnrSjPnSg8",
  authDomain: "clone-d060f.firebaseapp.com",
  projectId: "clone-d060f",
  storageBucket: "clone-d060f.appspot.com",
  messagingSenderId: "178017244236",
  appId: "1:178017244236:web:72ebf5694fb67483dd90e9",
  measurementId: "G-XH34BC7DZX",
};

// Initialize Firebase
const app_db = initializeApp(firebaseConfig);
export const authentication = getAuth(app_db);
export const database = getFirestore(app_db);