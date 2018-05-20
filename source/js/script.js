  var menu = document.querySelector(".main-nav");
  var btn = document.querySelector(".main-nav__toggle");
  var popup = document.querySelector(".site-list");
  var marker = document.querySelector(".map__marker");

  popup.classList.add("js__hide")
  marker.classList.add("js__hide--marker")
  menu.classList.remove("main-nav--opened")
  menu.classList.add("main-nav--closed")
  btn.classList.remove("js__hide")

  btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("js__hide");
    menu.classList.toggle("main-nav--opened")
    menu.classList.toggle("main-nav--closed")
  });
