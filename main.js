window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#000000";
    header.style.opacity = "75%";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
