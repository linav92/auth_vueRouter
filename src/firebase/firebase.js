import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

initializeApp(firebaseConfig);

const auth = getAuth();

// Registrar usuario
const registrarUsuario = (email, password, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      callback();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      callback(errorCode);
    });
};

// Login
const login = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      callback(errorCode);
    });
};

// Logout
const logout = () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Observador

const observador = (to, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      if (to.path === "/login") {
        next("/"); 
      } else {
        next();
      }
    } else  {
      if (to.path !== "/login") {
        next("/login");
      } else {
        next(); 
      }
    }
  });
};

export { registrarUsuario, login, logout, observador };
