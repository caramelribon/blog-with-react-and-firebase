import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNA7lKGs7N5ufksAzTEA2G6nEkcw1Jr2w",
  authDomain: "blog-with-react-and-fire-44056.firebaseapp.com",
  projectId: "blog-with-react-and-fire-44056",
  storageBucket: "blog-with-react-and-fire-44056.appspot.com",
  messagingSenderId: "948197207871",
  appId: "1:948197207871:web:8ed73dfdbabda066756d8a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
