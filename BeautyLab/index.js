function ready() {
  var tendina = document.querySelector(".tendina");
  tendina.addEventListener(
    "click",
    () => {
      var menu = document.querySelector(".menu");
      menu.classList.toggle("wide");
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
}

ready();
