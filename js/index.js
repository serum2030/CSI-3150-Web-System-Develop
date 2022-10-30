document.getElementById("nav-toggle").addEventListener("click", function () {
  let navMenu = document.getElementById("nav-menu-container");
  navMenu.style.display = navMenu.offsetParent === null ? "block" : "none";
});
function showFieldset(fieldsetToShow, fieldsetToHide) {
  fieldsetToShow = document.getElementById(fieldsetToShow);
  fieldsetToHide = document.getElementById(fieldsetToHide);
  var userInput = fieldsetToShow.querySelector("input");
  fieldsetToShow.classList.add("show_fieldset");
  fieldsetToHide.classList.remove("show_fieldset");

  setTimeout(function () {
    userInput.focus();
  }, 500);
}
