import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASs_V55V97d8ayxWARcmdLweLTGdcrLxU",
  authDomain: "tutorial-f4dab.firebaseapp.com",
  projectId: "tutorial-f4dab",
  storageBucket: "tutorial-f4dab.appspot.com",
  messagingSenderId: "121314748018",
  appId: "1:121314748018:web:5854f63f2f8a1c3517c4eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();