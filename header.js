const toggleMenu = document.getElementById("toggle-menu");
const navbar = document.getElementById("navbar");

toggleMenu.addEventListener("click", function () {
  navbar.querySelector("ul").classList.toggle("show");
});
