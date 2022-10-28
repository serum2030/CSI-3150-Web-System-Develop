document.getElementById("nav-toggle").addEventListener("click", function () {
  let navMenu = document.getElementById("nav-menu-container");
  navMenu.style.display = navMenu.offsetParent === null ? "block" : "none";
});
