var icon1 = document.querySelector(".icon-menu1");
var icon2 = document.querySelector(".icon-menu2");
var icon3 = document.querySelector(".icon-menu3");

var tendina = document.querySelector(".tendina");

document.addEventListener("DOMContentLoaded", () => {
  var icon1 = document.querySelector(".icon-menu1");
  var icon2 = document.querySelector(".icon-menu2");
  var icon3 = document.querySelector(".icon-menu3");
  var tendina = document.querySelector(".tendina");

  if (tendina) {
    tendina.addEventListener("click", () => {
      var menu = document.querySelector(".menu");
      menu.classList.toggle("wide");
      icon1.classList.toggle("changecolorbutton");
      icon2.classList.toggle("changecolorbutton");
      icon3.classList.toggle("changecolorbutton");
    });
  }
});

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
