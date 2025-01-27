// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiXWmVryD5NFc97_w5P4cME-VxT98JpaI",
  authDomain: "badasstodo-6b75a.firebaseapp.com",
  projectId: "badasstodo-6b75a",
  storageBucket: "badasstodo-6b75a.appspot.com",
  messagingSenderId: "869769282233",
  appId: "1:869769282233:web:38ef899d5956a2fdb45168"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    storage = getStorage(app);
} else {
    const app = currentApps[0];
    auth = getAuth(app);
    storage = getStorage(app);
}


export { auth, storage };



