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
}

ready();
