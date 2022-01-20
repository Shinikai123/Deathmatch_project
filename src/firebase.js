import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBjVX_PEPZyjdLXEoCSNnqHSdopO8c8TXw",
  authDomain: "deathmatch-project.firebaseapp.com",
  databaseURL: "https://deathmatch-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deathmatch-project",
  storageBucket: "deathmatch-project.appspot.com",
  messagingSenderId: "842861322092",
  appId: "1:842861322092:web:f94cdfcbe6b07886171d49",
  measurementId: "G-HEL6Q8M96F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  logout,
};