// configurazione firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// httpsjjjjjjj://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPvU8W1z66SjXXtwRnhdO78hDDernuzjw",
  authDomain: "progetto-test-auth.firebaseapp.com",
  projectId: "progetto-test-auth",
  storageBucket: "progetto-test-auth.appspot.com",
  messagingSenderId: "467393112659",
  appId: "1:467393112659:web:f5efd3933c13b7877034a6",
  measurementId: "G-ES3HLMVQHH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = "it";

console.log(auth);

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Utente loggato:", result.user);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      window.location.href = "./loggedpage.html";
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.error("Errore autenticazione:", error);
    });
};

//document
//  .querySelector("googleSignIn")
//  .addEventListener("click", signInWithGoogle);

function ready() {
  var tendina = document.querySelector(".tendina");
  var icon1 = document.querySelector(".icon-menu1");
  var icon2 = document.querySelector(".icon-menu2");
  var icon3 = document.querySelector(".icon-menu3");

  tendina.addEventListener(
    "click",
    () => {
      var menu = document.querySelector(".menu");
      menu.classList.toggle("wide");
      icon1.classList.toggle("changecolorbutton");
      icon2.classList.toggle("changecolorbutton");
      icon3.classList.toggle("changecolorbutton");
    },
    true
  );

  var logo = document.querySelector(".logo");
  logo.addEventListener(
    "click",
    () => {
      const newUrl = "https://beautylabvalentina.netlify.app";
      window.location.replace(newUrl);
    },
    true
  );

  var whatsapp = document.querySelector(".whatsapp");
  whatsapp.addEventListener(
    "click",
    () => {
      const newUrl = "https://wa.me/+393288448224";
      window.location.replace(newUrl);
    },
    true
  );

  var services = document.querySelector(".whatsapp");
  whatsapp.addEventListener(
    "click",
    () => {
      const newUrl = "https://wa.me/+393288448224";
      window.location.replace(newUrl);
    },
    true
  );

  var whatsapp = document.querySelector(".whatsapp");
  whatsapp.addEventListener(
    "click",
    () => {
      const newUrl = "https://wa.me/+393288448224";
      window.location.replace(newUrl);
    },
    true
  );

  // Initialize Firebase

  //const analytics = getAnalytics(app);

  //const auth = firebase.auth();

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Utente registrato:", userCredential.user);
      })
      .catch((error) => {
        console.error("Errore registrazione:", error);
      });
  };

  const logIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Utente loggato
        var user = userCredential.user;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    signUp(email, password);
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    logIn(email, password);
  });
}

ready();
