document.querySelector(".hamburger").addEventListener("click", (e) => {
  var nav = document.querySelector(".main-nav");
  if (nav.classList.contains("toggled")) {
    nav.classList.remove("toggled");
  } else {
    nav.classList.add("toggled");
  }
});
