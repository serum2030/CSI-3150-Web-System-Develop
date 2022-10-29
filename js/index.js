document.getElementById("nav-toggle").addEventListener("click", function () {
  let navMenu = document.getElementById("nav-menu-container");
  navMenu.style.display = navMenu.offsetParent === null ? "block" : "none";
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
