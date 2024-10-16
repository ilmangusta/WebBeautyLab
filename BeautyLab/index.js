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
}

ready();
