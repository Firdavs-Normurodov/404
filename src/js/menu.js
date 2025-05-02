const toggleButton = document.querySelector(".menu-toggle");
const navbarWrapper = document.querySelector(".navbar-wrapper");

toggleButton.addEventListener("click", () => {
  navbarWrapper.classList.toggle("show");
});
